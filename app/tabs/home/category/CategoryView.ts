import { EventData } from "data/observable";
import { Page } from 'ui/page';

import { CategoryViewModel } from "./category-view-model";

export function onNavigatedTo(args: EventData) {
    const component = <Page>args.object;

    if(Object.keys(component.bindingContext).indexOf('CategoryPage') == -1){
    component.bindingContext = new CategoryViewModel(component,
        component.navigationContext.categoryId,
        component.navigationContext.categoryName);
    }
}