"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var platform_1 = require("platform");
var SearchViewModel = /** @class */ (function (_super) {
    __extends(SearchViewModel, _super);
    function SearchViewModel(SearchPage) {
        var _this = _super.call(this) || this;
        _this.SearchPage = SearchPage;
        _this.searchbar = SearchPage.getViewById('searchBar');
        if (platform_1.isAndroid) {
            _this.searchbar.android.clearFocus();
        }
        return _this;
    }
    return SearchViewModel;
}(observable_1.Observable));
exports.SearchViewModel = SearchViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUc3QyxxQ0FBcUM7QUFFckM7SUFBcUMsbUNBQVU7SUFFM0MseUJBQW1CLFVBQXNCO1FBQXpDLFlBQ0ksaUJBQU8sU0FLVjtRQU5rQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUVyQyxLQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDckQsRUFBRSxDQUFBLENBQUMsb0JBQVMsQ0FBQyxDQUFBLENBQUM7WUFDVixLQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN4QyxDQUFDOztJQUNMLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUFURCxDQUFxQyx1QkFBVSxHQVM5QztBQVRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHNlYXJjaGJhcjogU2VhcmNoQmFyO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBTZWFyY2hQYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyID0gU2VhcmNoUGFnZS5nZXRWaWV3QnlJZCgnc2VhcmNoQmFyJyk7XG4gICAgICAgIGlmKGlzQW5kcm9pZCl7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5hbmRyb2lkLmNsZWFyRm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==