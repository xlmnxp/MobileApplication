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

export class SearchViewModel extends Observable {
    @ObservableProperty() searchResult:ObservableArray<any> = new ObservableArray([]);    
    searchbar: SearchBar;
    activityIndicator:ActivityIndicator
    constructor(public SearchPage:StackLayout) {
        super();
        this.searchbar = SearchPage.getViewById('searchBar');
        this.activityIndicator = SearchPage.getViewById('loading');
        this.activityIndicator.visibility = "collapse";
        
        this.searchResult.on("change",()=>{
            if(this.searchResult.length > 0){
                this.activityIndicator.visibility = "collapse";
            }else if(this.searchResult.length <= 0){
                this.activityIndicator.visibility = "visible";
            }
        });
    }

    public doSearch(){
        while (this.searchResult.length) { 
            this.searchResult.pop(); 
        }
        this.activityIndicator.visibility = "visible";        
        fetch(`${config.url}search.json?q=${ encodeURIComponent(this.searchbar.text) }`).then(res => res.json())
        .then(res =>{
            let dataTopics = res.topics.map(topic => {
                topic.created_at = moment(topic.created_at).locale("ar").fromNow();
                return topic;
            });
            this.searchResult.push(dataTopics);
        }).catch(err => {
            this.activityIndicator.visibility = "collapse";
            alert(err.message);
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
