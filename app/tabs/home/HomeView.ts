import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";
import { isAndroid } from 'platform';

import { HomeViewModel } from "./home-view-model";

export function onLoaded(args: EventData) {
    const component = <StackLayout>args.object;
    component.bindingContext = new HomeViewModel(component);
}

export const disableFocus = (args) => isAndroid ? args.object.android.setFocusable(false) : false;