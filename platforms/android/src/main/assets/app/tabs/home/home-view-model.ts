import { Observable } from "data/observable";

export class HomeViewModel extends Observable {
    posts:any[];
    constructor() {
        super();
        this.posts = []
        this.posts.push({
            avatar: "https://www.aosus.org/uploads/default/original/2X/0/0bd53c60fe7d636a0aafe88ab686c7feea479212.png",
            title: "الدعم وحلول مشاكل المستخدم",
            description: "يهتم هذا القسم بالدعم الفني والحلول فعندما يُشكل عليك أمراً أو لديك حلٌ لأحد المشاكل أرفقه هنا فهذا هو القسم الأنسب"
        });
    }
}
