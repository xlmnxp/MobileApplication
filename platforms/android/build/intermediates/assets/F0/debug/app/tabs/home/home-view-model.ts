import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array/observable-array";
import { StackLayout } from 'ui/layouts/stack-layout';
import { ActivityIndicator } from "ui/activity-indicator";
import { topmost } from "ui/frame";
import { ObservableProperty } from "../../shared/observable-property-decorator";
import { config } from '../../config';

export class HomeViewModel extends Observable {
    @ObservableProperty() categories:ObservableArray<any> = new ObservableArray([]);
    constructor(public HomePage:StackLayout) {
        super();
        fetch(config.url + "categories.json").then(res => res.json())
        .then(res =>{
            res.category_list.categories = res.category_list.categories.map(category => {
                if(category.uploaded_logo){
                    category.uploaded_logo.url = config.url + category.uploaded_logo.url;
                }
                
                return category;
            });
            this.categories.push(res.category_list.categories);
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

    public navigateToCategory(categoryIndex: any){
        let category = this.categories.getItem(categoryIndex.index);
        let categoryId = category.id;
        let categoryName = category.name;
        topmost().navigate({
            moduleName: "tabs/home/category/CategoryView",
            context: {
                categoryId: categoryId,
                categoryName: categoryName
            }
        });
    }
}
