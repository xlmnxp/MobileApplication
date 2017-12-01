import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array/observable-array";
import { Page } from 'ui/page';
import { ListView } from 'ui/list-view';
import { ActivityIndicator } from "ui/activity-indicator";
import { topmost } from 'ui/frame';
import moment = require("moment");

export class CategoryViewModel extends Observable {
    public title:string = "";
    topics:ObservableArray<any> = new ObservableArray([]);
    constructor(public CategoryPage:Page, public categoryId:number, public categoryName:string) {
        super();
        this.title = categoryName;
        fetch(`https://aosus.org/c/${categoryId}.json`).then(res => res.json())
        .then(res =>{
            let topicsList:ListView = CategoryPage.getViewById("topicsList");
            let dataTopics = res.topic_list.topics.map(topic => {
                topic.created_at = moment(topic.created_at).fromNow();
                return topic;
            });
            this.topics.push(dataTopics);
            topicsList.refresh();
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
