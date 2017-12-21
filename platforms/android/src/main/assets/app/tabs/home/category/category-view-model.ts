import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array/observable-array";
import { Page } from 'ui/page';
import { ActivityIndicator } from "ui/activity-indicator";
import { topmost } from 'ui/frame';
import moment = require("moment");
import { ObservableProperty } from "../../../shared/observable-property-decorator";
import { config } from '../../../config';

export class CategoryViewModel extends Observable {
    @ObservableProperty() public title:string = "";
    @ObservableProperty() topics:ObservableArray<any> = new ObservableArray([]);
    constructor(public CategoryPage:Page, public categoryId:number, public categoryName:string) {
        super();
        this.title = categoryName;
        fetch(`${config.url}c/${categoryId}.json`).then(res => res.json())
        .then(res =>{
            let dataTopics = res.topic_list.topics.map(topic => {
                topic.created_at = moment(topic.created_at).locale("ar").fromNow();

                if(topic.image_url){
                    if(topic.image_url.indexOf('http') == -1){
                        topic.image_url = (config.url + "." + topic.image_url).replace('./','');
                    }
                }

                topic.posts_count -= 1; 

                return topic;
            });
            this.topics.push(dataTopics);
        });

        this.topics.on("change",()=>{
            if(this.topics.length > 0){
                var activityIndicator:ActivityIndicator = CategoryPage.getViewById('loading');
                activityIndicator.visibility = "collapse";
            }else if(this.topics.length <= 0){
                var activityIndicator:ActivityIndicator = CategoryPage.getViewById('loading');
                activityIndicator.visibility = "visible";
            }
        });
    }

    public navigateToTopic(topicIndex: any){
        let topic = this.topics.getItem(topicIndex.index);
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
