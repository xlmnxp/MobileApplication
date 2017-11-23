import { Observable } from "data/observable";
import { StackLayout } from 'ui/layouts/stack-layout';
import { ObservableArray } from 'data/observable-array/observable-array';
import { ListView } from 'ui/list-view';

export class BrowseViewModel extends Observable {
    public latestTopics: ObservableArray<any> = new ObservableArray([]);
    constructor(public BrowserPage:StackLayout) {
        super();
        fetch("https://aosus.org/latest.json").then(res => res.json())
        .then(res => {
            let latestTopicsList:ListView = BrowserPage.getViewById("latestTopicsList");
            this.latestTopics.push(res.topic_list.topics);
            latestTopicsList.refresh();
        });
    }

    DateToString(date:any){
        return (new Date(date)
        .toDateString());
    }
}
