import { Observable } from "data/observable";
import { StackLayout } from 'ui/layouts/stack-layout';
import { SearchBar } from "ui/search-bar";
import { isAndroid } from 'platform';
import { config } from '../../config';

export class SearchViewModel extends Observable {
    searchbar: SearchBar;
    constructor(public SearchPage:StackLayout) {
        super();
        this.searchbar = SearchPage.getViewById('searchBar');
    }
}
