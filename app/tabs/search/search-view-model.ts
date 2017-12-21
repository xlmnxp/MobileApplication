import { Observable } from "data/observable";
import { StackLayout } from 'ui/layouts/stack-layout';
import { ObservableArray } from "data/observable-array/observable-array";
import { ActivityIndicator } from "ui/activity-indicator";
import { SearchBar } from "ui/search-bar";
import { isAndroid } from 'platform';
import moment = require("moment");
import { ObservableProperty } from "../../shared/observable-property-decorator";
import { config } from '../../config';
import { topmost } from "ui/frame";
import { Label } from "ui/label";

export class SearchViewModel extends Observable {
    @ObservableProperty() searchResult:ObservableArray<any> = new ObservableArray([]);    
    searchbar: SearchBar;
    activityIndicator:ActivityIndicator;
    searchMessage:Label;
    constructor(public SearchPage:StackLayout) {
        super();
        this.searchbar = SearchPage.getViewById('searchBar');
        this.activityIndicator = SearchPage.getViewById('loading');
        this.searchMessage = SearchPage.getViewById('SearchMessage');
        this.activityIndicator.visibility = "collapse";
        this.searchMessage.visibility = "collapse";
        
        this.searchResult.on("change",()=>{
            this.searchMessage.visibility = "collapse";
            if(this.searchResult.length > 0){
                this.activityIndicator.visibility = "collapse";
            }else if(this.searchResult.length <= 0){
                this.activityIndicator.visibility = "visible";
            }
        });
    }

    public doSearch(){

        if(isAndroid){
            this.searchbar.android.setFocusable(false);
        }

        while (this.searchResult.length) { 
            this.searchResult.pop(); 
        }

        this.activityIndicator.visibility = "visible";
        this.searchMessage.visibility = "collapse";
              
        fetch(`${config.url}search.json?q=${ encodeURIComponent(this.searchbar.text) }`).then(res => res.json())
        .then(res =>{
            if(res.topics){
                let dataTopics = res.topics.map(topic => {
                    topic.created_at = moment(topic.created_at).locale("ar").fromNow();
                    
                    if(topic.image_url){
                        if(topic.image_url.indexOf('http') == -1){
                            topic.image_url = (config.url + "." + topic.image_url).replace('./','');
                        }
                    }
                    
                    topic.posts_count -= 1; 

                    return topic;
                });
                this.searchResult.push(dataTopics);
            }else{
                this.activityIndicator.visibility = "collapse";                
                this.searchMessage.visibility = "visible";
            }
        }).catch(err => {
            this.activityIndicator.visibility = "collapse";
        });
    }

    public navigateToTopic(topicIndex: any){
        let topic = this.searchResult.getItem(topicIndex.index);
        let topicId = topic.id;
        let topicTitle = topic.title;
        topmost().navigate({
            moduleName: "pages/topic/topicView",
            context: {
                topicId: topicId,
                topicTitle: topicTitle
            }
        });
    }
}
