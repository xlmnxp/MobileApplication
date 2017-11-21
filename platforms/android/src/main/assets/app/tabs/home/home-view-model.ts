import { Observable } from "data/observable";
import { StackLayout } from 'ui/layouts/stack-layout';
import { ListView } from 'ui/list-view';

export class HomeViewModel extends Observable {
    posts:any[];
    constructor(public page:StackLayout) {
        super();
        this.posts = []
        fetch("https://aosus.org/categories.json").then(res => res.json())
        .then(res =>{
            res.category_list.categories.forEach(element => {
                this.posts.push(element);
                (<ListView>page.getViewById("categoriesList")).refresh();
            });
        });
    }
}
