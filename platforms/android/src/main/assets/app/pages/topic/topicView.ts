import { EventData } from "data/observable";
import { Page } from 'ui/page';
import { TopicViewModel } from "./topic-view-model";
import { isAndroid } from "platform";

export function onNavigatedTo(args: EventData) {
    const component = <Page>args.object;
    component.bindingContext = new TopicViewModel(component,
        component.navigationContext.topicId,
        component.navigationContext.topicTitle);
}

export const disableZoom = (args) => isAndroid ? args.object.android.getSettings().setBuiltInZoomControls(false) : false;