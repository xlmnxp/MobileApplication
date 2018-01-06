import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";
import { isAndroid } from 'platform';

import { SearchViewModel } from "./search-view-model";

var isLoaded = false;

export function onLoaded(args: EventData) {
    const component = <StackLayout>args.object;

    if(isAndroid){
        component.getViewById('searchBar').android.setFocusable(false)
    }
    
    if(!isLoaded){
        component.bindingContext = new SearchViewModel(component);
        isLoaded = true;
    }
}

export const disableFocus = (args) => isAndroid ? args.object.android.setFocusable(false) : false;