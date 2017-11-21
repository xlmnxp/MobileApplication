import { Observable } from "data/observable";
import { StackLayout } from 'ui/layouts/stack-layout';
import { ListView } from 'ui/list-view';

export class HomeViewModel extends Observable {
    categories:any[];
    constructor(public HomePage:StackLayout) {
        super();
        this.categories = []
        fetch("https://aosus.org/categories.json").then(res => res.json())
        .then(res =>{
            res.category_list.categories.forEach(category => {
                this.categories.push(category);
                (<ListView>HomePage.getViewById("categoriesList")).refresh();
            });
        });
    }
}
