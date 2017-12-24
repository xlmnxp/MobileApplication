import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";

import { BrowseViewModel } from "./browse-view-model";

export function onLoaded(args: EventData) {
    const component = <StackLayout>args.object;
    if(Object.keys(component.bindingContext || {}).indexOf('BrowserPage') == -1){        
        component.bindingContext = new BrowseViewModel(component);
    }
}