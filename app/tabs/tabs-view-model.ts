import { Observable } from "data/observable";
import { isAndroid } from "platform";

import { ObservableProperty } from "../shared/observable-property-decorator";
import { Page } from "ui/frame";

export class TabsViewModel extends Observable {
    @ObservableProperty() title: string;

    constructor(public Page:Page) {
        super();
    }
}
