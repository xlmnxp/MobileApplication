import { ObservableProperty } from "../../shared/observable-property-decorator";
import { config } from '../../config';
import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array/observable-array";
import { StackLayout } from "ui/layouts/stack-layout";
import { ActivityIndicator } from "ui/activity-indicator";
import { Repeater } from "ui/repeater";

export class CategoryViewComponent extends Observable {
    @ObservableProperty() public categoryTopics:ObservableArray<any> = new ObservableArray([]);
    @ObservableProperty() public loading:Boolean = true;
    public repeater:Repeater = this.Page.getViewById<Repeater>("repeater");

    constructor(public Page:StackLayout, public categoryId:number) {
        super();

        console.log('categoryId',categoryId);
        fetch(`${config.url}c/${categoryId}.json`).then(res => res.json())
        .then(res =>{

            let dataTopics = res.topic_list.topics.slice(0,5).map(topic => {

                if(topic.image_url){
                    if(topic.image_url.indexOf('http') == -1){
                        topic.image_url = (config.url + "." + topic.image_url).replace('./','');
                    }
                }else{
                    topic.image_url = "~/images/logo.png";
                }

                return {id: topic.id,title: topic.title, image_url: topic.image_url};
            });
            this.categoryTopics.push(dataTopics);
        });
        
        this.categoryTopics.on("change",()=>{
            if(this.categoryTopics.length > 0){
                this.loading = false;
            }else if(this.categoryTopics.length <= 0){
                this.loading = true;
            }
        });
    }

}
