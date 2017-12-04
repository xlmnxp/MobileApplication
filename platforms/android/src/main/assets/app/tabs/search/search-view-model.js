"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var SearchViewModel = /** @class */ (function (_super) {
    __extends(SearchViewModel, _super);
    function SearchViewModel(SearchPage) {
        var _this = _super.call(this) || this;
        _this.SearchPage = SearchPage;
        _this.searchbar = SearchPage.getViewById('searchBar');
        return _this;
    }
    return SearchViewModel;
}(observable_1.Observable));
exports.SearchViewModel = SearchViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQU03QztJQUFxQyxtQ0FBVTtJQUUzQyx5QkFBbUIsVUFBc0I7UUFBekMsWUFDSSxpQkFBTyxTQUVWO1FBSGtCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXJDLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDekQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXFDLHVCQUFVLEdBTTlDO0FBTlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHNlYXJjaGJhcjogU2VhcmNoQmFyO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBTZWFyY2hQYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyID0gU2VhcmNoUGFnZS5nZXRWaWV3QnlJZCgnc2VhcmNoQmFyJyk7XG4gICAgfVxufVxuIl19