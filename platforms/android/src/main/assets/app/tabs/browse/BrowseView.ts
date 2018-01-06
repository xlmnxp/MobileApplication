import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";

import { BrowseViewModel } from "./browse-view-model";

var isLoaded = false;

export function onLoaded(args: EventData) {
    const component = <StackLayout>args.object;
    if(!isLoaded){        
        component.bindingContext = new BrowseViewModel(component);
        isLoaded = true;
    }
}