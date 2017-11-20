import { Observable } from "data/observable";

export class HomeViewModel extends Observable {
    posts:any[];
    constructor() {
        super();
        this.posts.push({
            thumnail: ""
        });
    }
}
