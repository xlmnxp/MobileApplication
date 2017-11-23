"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var BrowseViewModel = /** @class */ (function (_super) {
    __extends(BrowseViewModel, _super);
    function BrowseViewModel(BrowserPage) {
        var _this = _super.call(this) || this;
        _this.BrowserPage = BrowserPage;
        _this.latestTopics = new observable_array_1.ObservableArray([]);
        fetch("https://aosus.org/latest.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var latestTopicsList = BrowserPage.getViewById("latestTopicsList");
            _this.latestTopics.push(res.topic_list.topics);
            latestTopicsList.refresh();
        });
        return _this;
    }
    BrowseViewModel.prototype.DateToString = function (date) {
        return (new Date(date)
            .toDateString());
    };
    return BrowseViewModel;
}(observable_1.Observable));
exports.BrowseViewModel = BrowseViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFHekU7SUFBcUMsbUNBQVU7SUFFM0MseUJBQW1CLFdBQXVCO1FBQTFDLFlBQ0ksaUJBQU8sU0FPVjtRQVJrQixpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQURuQyxrQkFBWSxHQUF5QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHaEUsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxnQkFBZ0IsR0FBWSxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDNUUsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5QyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLElBQVE7UUFDakIsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JCLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWhCRCxDQUFxQyx1QkFBVSxHQWdCOUM7QUFoQlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwdWJsaWMgbGF0ZXN0VG9waWNzOiBPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBCcm93c2VyUGFnZTpTdGFja0xheW91dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vYW9zdXMub3JnL2xhdGVzdC5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgbGF0ZXN0VG9waWNzTGlzdDpMaXN0VmlldyA9IEJyb3dzZXJQYWdlLmdldFZpZXdCeUlkKFwibGF0ZXN0VG9waWNzTGlzdFwiKTtcbiAgICAgICAgICAgIHRoaXMubGF0ZXN0VG9waWNzLnB1c2gocmVzLnRvcGljX2xpc3QudG9waWNzKTtcbiAgICAgICAgICAgIGxhdGVzdFRvcGljc0xpc3QucmVmcmVzaCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBEYXRlVG9TdHJpbmcoZGF0ZTphbnkpe1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIC50b0RhdGVTdHJpbmcoKSk7XG4gICAgfVxufVxuIl19