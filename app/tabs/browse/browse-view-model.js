"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var moment = require("moment");
var BrowseViewModel = /** @class */ (function (_super) {
    __extends(BrowseViewModel, _super);
    function BrowseViewModel(BrowserPage) {
        var _this = _super.call(this) || this;
        _this.BrowserPage = BrowserPage;
        _this.latestTopics = new observable_array_1.ObservableArray([]);
        moment.locale('ar');
        fetch("https://aosus.org/latest.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var latestTopicsList = BrowserPage.getViewById("latestTopicsList");
            var topicIndex = 1;
            var dataTopics = res.topic_list.topics.map(function (topic) {
                topic.created_at = moment(topic.created_at).fromNow();
                topic.topicIndex = topicIndex;
                topicIndex++;
                return topic;
            });
            _this.latestTopics.push(dataTopics);
            latestTopicsList.refresh();
        });
        _this.latestTopics.on("change", function () {
            if (_this.latestTopics.length > 0) {
                var activityIndicator = BrowserPage.getViewById('loading');
                activityIndicator.visibility = "collapse";
            }
            else if (_this.latestTopics.length <= 0) {
                var activityIndicator = BrowserPage.getViewById('loading');
                activityIndicator.visibility = "visible";
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFLekUsK0JBQWtDO0FBR2xDO0lBQXFDLG1DQUFVO0lBRTNDLHlCQUFtQixXQUF1QjtRQUExQyxZQUNJLGlCQUFPLFNBeUJWO1FBMUJrQixpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQURuQyxrQkFBWSxHQUF5QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHaEUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQzdELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLGdCQUFnQixHQUFZLFdBQVcsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM1RSxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7WUFDbkIsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0RCxLQUFLLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztnQkFDOUIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ25DLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQzFCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzdCLElBQUksaUJBQWlCLEdBQXFCLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDOUMsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNwQyxJQUFJLGlCQUFpQixHQUFxQixXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3RSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRUQsc0NBQVksR0FBWixVQUFhLElBQVE7UUFDakIsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ3JCLFlBQVksRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQWxDRCxDQUFxQyx1QkFBVSxHQWtDOUM7QUFsQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3VpL2FjdGl2aXR5LWluZGljYXRvcic7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCI7XG5pbXBvcnQgeyBTcGFuIH0gZnJvbSBcInRleHQvc3BhblwiO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5pbXBvcnQgeyBTdHlsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lL2ZyYW1lXCI7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwdWJsaWMgbGF0ZXN0VG9waWNzOiBPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBCcm93c2VyUGFnZTpTdGFja0xheW91dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBtb21lbnQubG9jYWxlKCdhcicpOyAgICAgICAgXG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hb3N1cy5vcmcvbGF0ZXN0Lmpzb25cIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGxldCBsYXRlc3RUb3BpY3NMaXN0Okxpc3RWaWV3ID0gQnJvd3NlclBhZ2UuZ2V0Vmlld0J5SWQoXCJsYXRlc3RUb3BpY3NMaXN0XCIpO1xuICAgICAgICAgICAgbGV0IHRvcGljSW5kZXggPSAxO1xuICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmZyb21Ob3coKTtcbiAgICAgICAgICAgICAgICB0b3BpYy50b3BpY0luZGV4ID0gdG9waWNJbmRleDtcbiAgICAgICAgICAgICAgICB0b3BpY0luZGV4Kys7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvcGljO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxhdGVzdFRvcGljcy5wdXNoKGRhdGFUb3BpY3MpO1xuICAgICAgICAgICAgbGF0ZXN0VG9waWNzTGlzdC5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGF0ZXN0VG9waWNzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEJyb3dzZXJQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBCcm93c2VyUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgRGF0ZVRvU3RyaW5nKGRhdGU6YW55KTpzdHJpbmd7XG4gICAgICAgIHJldHVybiAobmV3IERhdGUoZGF0ZSlcbiAgICAgICAgLnRvRGF0ZVN0cmluZygpKTtcbiAgICB9XG59XG4iXX0=