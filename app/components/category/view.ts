import { EventData } from "data/observable";
import { Page } from 'ui/page';
import { StackLayout } from "ui/layouts/stack-layout";
import { isAndroid } from "platform";
import { topmost } from "ui/frame";
import { setTimeout } from "timer";

import { CategoryViewComponent } from "./category-view-component";

var isLoaded = {};
var component;

export function onLoaded(args: EventData) {
    component = <StackLayout>args.object;

    if(!isLoaded[(<any>component).categoryId]){
        component.bindingContext = new CategoryViewComponent(component,(<any>component).categoryId);
        isLoaded[(<any>component).categoryId] = true;
    }
}

export function navigateToTopic(args: any){
    let topic = args.object.bindingContext;
    let topicId = topic.id;
    let topicTitle = topic.title;

    topmost().navigate({
        moduleName: "pages/topic/topicView",
        context: {
            topicId: topicId,
            topicTitle: topicTitle
        }
    });
}

export const scrollViewSetup = (args: any) => disableFocus(self);

export const disableFocus = (args) => isAndroid ? args.object.android.setFocusable(false) : false;