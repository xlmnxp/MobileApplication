import { EventData } from "data/observable";
import { Page } from 'ui/page';

import { CategoryViewModel } from "./category-view-model";

export function onloaded(args: EventData) {
    const component = <Page>args.object;
    component.bindingContext = new CategoryViewModel(component,
        component.navigationContext.categoryId,
        component.navigationContext.categoryName);
}