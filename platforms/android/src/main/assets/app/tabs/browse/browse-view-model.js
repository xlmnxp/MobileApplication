"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var frame_1 = require("ui/frame");
var moment = require("moment");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var BrowseViewModel = /** @class */ (function (_super) {
    __extends(BrowseViewModel, _super);
    function BrowseViewModel(BrowserPage) {
        var _this = _super.call(this) || this;
        _this.BrowserPage = BrowserPage;
        _this.latestTopics = new observable_array_1.ObservableArray([]);
        moment.locale('ar');
        fetch(config_1.config.url + "latest.json").then(function (res) { return res.json(); })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFLekUsa0NBQW1DO0FBQ25DLCtCQUFrQztBQUNsQyw0RkFBZ0Y7QUFDaEYsdUNBQXNDO0FBRXRDO0lBQXFDLG1DQUFVO0lBRTNDLHlCQUFtQixXQUF1QjtRQUExQyxZQUNJLGlCQUFPLFNBcUJWO1FBdEJrQixpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQURiLGtCQUFZLEdBQXlCLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUd0RixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxlQUFNLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDeEQsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLElBQUksZ0JBQWdCLEdBQVksV0FBVyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzVFLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQzVDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQzFCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzdCLElBQUksaUJBQWlCLEdBQXFCLFdBQVcsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzdFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDOUMsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNwQyxJQUFJLGlCQUFpQixHQUFxQixXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3RSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRU0seUNBQWUsR0FBdEIsVUFBdUIsVUFBZTtRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdCLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNmLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsT0FBTyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixVQUFVLEVBQUUsVUFBVTthQUN6QjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFwQ3FCO1FBQXJCLGtEQUFrQixFQUFFO2tDQUFzQixrQ0FBZTt5REFBZ0M7SUFxQzlGLHNCQUFDO0NBQUEsQUF0Q0QsQ0FBcUMsdUJBQVUsR0FzQzlDO0FBdENZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd1aS9saXN0LXZpZXcnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd1aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xuaW1wb3J0IHsgRm9ybWF0dGVkU3RyaW5nIH0gZnJvbSBcInRleHQvZm9ybWF0dGVkLXN0cmluZ1wiO1xuaW1wb3J0IHsgU3BhbiB9IGZyb20gXCJ0ZXh0L3NwYW5cIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGxhdGVzdFRvcGljczogT2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgQnJvd3NlclBhZ2U6U3RhY2tMYXlvdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgbW9tZW50LmxvY2FsZSgnYXInKTtcbiAgICAgICAgZmV0Y2goY29uZmlnLnVybCArIFwibGF0ZXN0Lmpzb25cIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGxldCBsYXRlc3RUb3BpY3NMaXN0Okxpc3RWaWV3ID0gQnJvd3NlclBhZ2UuZ2V0Vmlld0J5SWQoXCJsYXRlc3RUb3BpY3NMaXN0XCIpO1xuICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmZyb21Ob3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9waWM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubGF0ZXN0VG9waWNzLnB1c2goZGF0YVRvcGljcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGF0ZXN0VG9waWNzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEJyb3dzZXJQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBCcm93c2VyUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9Ub3BpYyh0b3BpY0luZGV4OiBhbnkpe1xuICAgICAgICBsZXQgdG9waWMgPSB0aGlzLmxhdGVzdFRvcGljcy5nZXRJdGVtKHRvcGljSW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgdG9waWNJZCA9IHRvcGljLmlkO1xuICAgICAgICBsZXQgdG9waWNUaXRsZSA9IHRvcGljLnRpdGxlO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy90b3BpYy90b3BpY1ZpZXdcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0b3BpY0lkOiB0b3BpY0lkLFxuICAgICAgICAgICAgICAgIHRvcGljVGl0bGU6IHRvcGljVGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19