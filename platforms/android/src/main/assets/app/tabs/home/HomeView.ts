import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";
import { isAndroid } from 'platform';

import { HomeViewModel } from "./home-view-model";

var isLoaded = false;

export function onLoaded(args: EventData) {
    const component = <StackLayout>args.object;
    if(!isLoaded){        
        component.bindingContext = new HomeViewModel(component);
        isLoaded = true;
    }
}

export const disableFocus = (args) => isAndroid ? args.object.android.setFocusable(false) : false;