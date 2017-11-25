import { Observable } from "data/observable";
import { StackLayout } from 'ui/layouts/stack-layout';
import { ObservableArray } from 'data/observable-array/observable-array';
import { ListView } from 'ui/list-view';
import { ActivityIndicator } from 'ui/activity-indicator';
import moment = require("moment");

export class BrowseViewModel extends Observable {
    public latestTopics: ObservableArray<any> = new ObservableArray([]);
    constructor(public BrowserPage:StackLayout) {
        super();
        fetch("https://aosus.org/latest.json").then(res => res.json())
        .then(res => {
            let latestTopicsList:ListView = BrowserPage.getViewById("latestTopicsList");
            let dataTopics = res.topic_list.topics.map(topic => {
                topic.created_at = moment
                return topic;
            });
            this.latestTopics.push(dataTopics);
            latestTopicsList.refresh();
        });

        this.latestTopics.on("change",()=>{
            if(this.latestTopics.length > 0){
                var activityIndicator:ActivityIndicator = BrowserPage.getViewById('loading');
                activityIndicator.visibility = "collapse";
            }else if(this.latestTopics.length <= 0){
                var activityIndicator:ActivityIndicator = BrowserPage.getViewById('loading');
                activityIndicator.visibility = "visible";
            }
        });
    }

    DateToString(date:any):string{
        return (new Date(date)
        .toDateString());
    }
}
