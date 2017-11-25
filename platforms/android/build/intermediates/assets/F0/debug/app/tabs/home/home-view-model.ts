import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array/observable-array";
import { StackLayout } from 'ui/layouts/stack-layout';
import { ListView } from 'ui/list-view';
import { ActivityIndicator } from "ui/activity-indicator";

export class HomeViewModel extends Observable {
    categories:ObservableArray<any> = new ObservableArray([]);
    constructor(public HomePage:StackLayout) {
        super();
        fetch("https://aosus.org/categories.json").then(res => res.json())
        .then(res =>{
            let categoriesList:ListView = HomePage.getViewById("categoriesList");
            this.categories.push(res.category_list.categories);
            categoriesList.refresh();
        });

        this.categories.on("change",()=>{
            if(this.categories.length > 0){
                var activityIndicator:ActivityIndicator = HomePage.getViewById('loading');
                activityIndicator.visibility = "collapse";
            }else if(this.categories.length <= 0){
                var activityIndicator:ActivityIndicator = HomePage.getViewById('loading');
                activityIndicator.visibility = "visible";
            }
        });
    }
}
