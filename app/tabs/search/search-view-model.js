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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUs3QztJQUFxQyxtQ0FBVTtJQUUzQyx5QkFBbUIsVUFBc0I7UUFBekMsWUFDSSxpQkFBTyxTQUVWO1FBSGtCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXJDLEtBQUksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQzs7SUFDekQsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXFDLHVCQUFVLEdBTTlDO0FBTlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgc2VhcmNoYmFyOiBTZWFyY2hCYXI7XG4gICAgY29uc3RydWN0b3IocHVibGljIFNlYXJjaFBhZ2U6U3RhY2tMYXlvdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBTZWFyY2hQYWdlLmdldFZpZXdCeUlkKCdzZWFyY2hCYXInKTtcbiAgICB9XG59XG4iXX0=