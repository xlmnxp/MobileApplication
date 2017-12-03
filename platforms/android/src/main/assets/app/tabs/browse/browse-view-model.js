"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var frame_1 = require("ui/frame");
var moment = require("moment");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
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
            var dataTopics = res.topic_list.topics.map(function (topic) {
                topic.created_at = moment(topic.created_at).fromNow();
                return topic;
            });
            _this.latestTopics.push(dataTopics);
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
    BrowseViewModel.prototype.navigateToTopic = function (topicIndex) {
        var topic = this.latestTopics.getItem(topicIndex.index);
        var topicId = topic.id;
        var topicTitle = topic.title;
        frame_1.topmost().navigate({
            moduleName: "pages/topic/topicView",
            context: {
                topicId: topicId,
                topicTitle: topicTitle
            }
        });
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], BrowseViewModel.prototype, "latestTopics", void 0);
    return BrowseViewModel;
}(observable_1.Observable));
exports.BrowseViewModel = BrowseViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFLekUsa0NBQW1DO0FBQ25DLCtCQUFrQztBQUNsQyw0RkFBZ0Y7QUFFaEY7SUFBcUMsbUNBQVU7SUFFM0MseUJBQW1CLFdBQXVCO1FBQTFDLFlBQ0ksaUJBQU8sU0FxQlY7UUF0QmtCLGlCQUFXLEdBQVgsV0FBVyxDQUFZO1FBRGIsa0JBQVksR0FBeUIsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR3RGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxnQkFBZ0IsR0FBWSxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDNUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2dCQUN0RCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkMsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUM7WUFDMUIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDN0IsSUFBSSxpQkFBaUIsR0FBcUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0UsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM5QyxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3BDLElBQUksaUJBQWlCLEdBQXFCLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFTSx5Q0FBZSxHQUF0QixVQUF1QixVQUFlO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDN0IsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2YsVUFBVSxFQUFFLHVCQUF1QjtZQUNuQyxPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFVBQVUsRUFBRSxVQUFVO2FBQ3pCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXBDcUI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQXNCLGtDQUFlO3lEQUFnQztJQXFDOUYsc0JBQUM7Q0FBQSxBQXRDRCxDQUFxQyx1QkFBVSxHQXNDOUM7QUF0Q1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tICdkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheSc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gJ3VpL2FjdGl2aXR5LWluZGljYXRvcic7XG5pbXBvcnQgeyBGb3JtYXR0ZWRTdHJpbmcgfSBmcm9tIFwidGV4dC9mb3JtYXR0ZWQtc3RyaW5nXCI7XG5pbXBvcnQgeyBTcGFuIH0gZnJvbSBcInRleHQvc3BhblwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgQnJvd3NlVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyBsYXRlc3RUb3BpY3M6IE9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgY29uc3RydWN0b3IocHVibGljIEJyb3dzZXJQYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIG1vbWVudC5sb2NhbGUoJ2FyJyk7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hb3N1cy5vcmcvbGF0ZXN0Lmpzb25cIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGxldCBsYXRlc3RUb3BpY3NMaXN0Okxpc3RWaWV3ID0gQnJvd3NlclBhZ2UuZ2V0Vmlld0J5SWQoXCJsYXRlc3RUb3BpY3NMaXN0XCIpO1xuICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmZyb21Ob3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9waWM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGF0ZXN0VG9waWNzLnB1c2goZGF0YVRvcGljcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGF0ZXN0VG9waWNzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEJyb3dzZXJQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBCcm93c2VyUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9Ub3BpYyh0b3BpY0luZGV4OiBhbnkpe1xuICAgICAgICBsZXQgdG9waWMgPSB0aGlzLmxhdGVzdFRvcGljcy5nZXRJdGVtKHRvcGljSW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgdG9waWNJZCA9IHRvcGljLmlkO1xuICAgICAgICBsZXQgdG9waWNUaXRsZSA9IHRvcGljLnRpdGxlO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy90b3BpYy90b3BpY1ZpZXdcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0b3BpY0lkOiB0b3BpY0lkLFxuICAgICAgICAgICAgICAgIHRvcGljVGl0bGU6IHRvcGljVGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19