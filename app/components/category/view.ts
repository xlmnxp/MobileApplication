import { EventData } from "data/observable";
import { Page } from 'ui/page';
import { StackLayout } from "ui/layouts/stack-layout";
import { isAndroid } from "platform";
import { topmost } from "ui/frame";

import { CategoryViewComponent } from "./category-view-component";

export function onLoaded(args: EventData) {
    const component = <StackLayout>args.object;

    if(!component.bindingContext || Object.keys(component.bindingContext || {}).indexOf('Page') == -1){
        component.bindingContext = new CategoryViewComponent(component,(<any>component).categoryId);
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


export const disableFocus = (args) => isAndroid ? args.object.android.setFocusable(false) : false;