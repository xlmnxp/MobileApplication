"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var frame_1 = require("ui/frame");
var moment = require("moment");
var observable_property_decorator_1 = require("../../../shared/observable-property-decorator");
var config_1 = require("../../../config");
var CategoryViewModel = /** @class */ (function (_super) {
    __extends(CategoryViewModel, _super);
    function CategoryViewModel(CategoryPage, categoryId, categoryName) {
        var _this = _super.call(this) || this;
        _this.CategoryPage = CategoryPage;
        _this.categoryId = categoryId;
        _this.categoryName = categoryName;
        _this.title = "";
        _this.topics = new observable_array_1.ObservableArray([]);
        _this.title = categoryName;
        fetch(config_1.config.url + "c/" + categoryId + ".json").then(function (res) { return res.json(); })
            .then(function (res) {
            var dataTopics = res.topic_list.topics.map(function (topic) {
                topic.created_at = moment(topic.created_at).locale(config_1.config.language).fromNow();
                if (topic.image_url) {
                    if (topic.image_url.indexOf('http') == -1) {
                        topic.image_url = (config_1.config.url + "." + topic.image_url).replace('./', '');
                    }
                }
                topic.posts_count -= 1;
                return topic;
            });
            _this.topics.push(dataTopics);
        });
        _this.topics.on("change", function () {
            if (_this.topics.length > 0) {
                var activityIndicator = CategoryPage.getViewById('loading');
                activityIndicator.visibility = "collapse";
            }
            else if (_this.topics.length <= 0) {
                var activityIndicator = CategoryPage.getViewById('loading');
                activityIndicator.visibility = "visible";
            }
        });
        return _this;
    }
    CategoryViewModel.prototype.navigateToTopic = function (topicIndex) {
        var topic = this.topics.getItem(topicIndex.index);
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
        __metadata("design:type", String)
    ], CategoryViewModel.prototype, "title", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], CategoryViewModel.prototype, "topics", void 0);
    return CategoryViewModel;
}(observable_1.Observable));
exports.CategoryViewModel = CategoryViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsMkVBQXlFO0FBR3pFLGtDQUFtQztBQUNuQywrQkFBa0M7QUFDbEMsK0ZBQW1GO0FBQ25GLDBDQUF5QztBQUV6QztJQUF1QyxxQ0FBVTtJQUc3QywyQkFBbUIsWUFBaUIsRUFBUyxVQUFpQixFQUFTLFlBQW1CO1FBQTFGLFlBQ0ksaUJBQU8sU0E2QlY7UUE5QmtCLGtCQUFZLEdBQVosWUFBWSxDQUFLO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFBUyxrQkFBWSxHQUFaLFlBQVksQ0FBTztRQUY3RCxXQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLFlBQU0sR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR3hFLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLEtBQUssQ0FBSSxlQUFNLENBQUMsR0FBRyxVQUFLLFVBQVUsVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqRSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRTlFLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO29CQUNoQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3RDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxlQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUUsQ0FBQztnQkFDTCxDQUFDO2dCQUVELEtBQUssQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO2dCQUV2QixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUM7WUFDcEIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDdkIsSUFBSSxpQkFBaUIsR0FBcUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUUsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM5QyxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzlCLElBQUksaUJBQWlCLEdBQXFCLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFTSwyQ0FBZSxHQUF0QixVQUF1QixVQUFlO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDN0IsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2YsVUFBVSxFQUFFLHVCQUF1QjtZQUNuQyxPQUFPLEVBQUU7Z0JBQ0wsT0FBTyxFQUFFLE9BQU87Z0JBQ2hCLFVBQVUsRUFBRSxVQUFVO2FBQ3pCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQTdDcUI7UUFBckIsa0RBQWtCLEVBQUU7O29EQUEwQjtJQUN6QjtRQUFyQixrREFBa0IsRUFBRTtrQ0FBUSxrQ0FBZTtxREFBZ0M7SUE2Q2hGLHdCQUFDO0NBQUEsQUEvQ0QsQ0FBdUMsdUJBQVUsR0ErQ2hEO0FBL0NZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gJ3VpL2ZyYW1lJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnJztcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyB0aXRsZTpzdHJpbmcgPSBcIlwiO1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSB0b3BpY3M6T2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgQ2F0ZWdvcnlQYWdlOlBhZ2UsIHB1YmxpYyBjYXRlZ29yeUlkOm51bWJlciwgcHVibGljIGNhdGVnb3J5TmFtZTpzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IGNhdGVnb3J5TmFtZTtcbiAgICAgICAgZmV0Y2goYCR7Y29uZmlnLnVybH1jLyR7Y2F0ZWdvcnlJZH0uanNvbmApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGxldCBkYXRhVG9waWNzID0gcmVzLnRvcGljX2xpc3QudG9waWNzLm1hcCh0b3BpYyA9PiB7XG4gICAgICAgICAgICAgICAgdG9waWMuY3JlYXRlZF9hdCA9IG1vbWVudCh0b3BpYy5jcmVhdGVkX2F0KS5sb2NhbGUoY29uZmlnLmxhbmd1YWdlKS5mcm9tTm93KCk7XG5cbiAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwpe1xuICAgICAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwuaW5kZXhPZignaHR0cCcpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljLmltYWdlX3VybCA9IChjb25maWcudXJsICsgXCIuXCIgKyB0b3BpYy5pbWFnZV91cmwpLnJlcGxhY2UoJy4vJywnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0b3BpYy5wb3N0c19jb3VudCAtPSAxOyBcblxuICAgICAgICAgICAgICAgIHJldHVybiB0b3BpYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy50b3BpY3MucHVzaChkYXRhVG9waWNzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50b3BpY3Mub24oXCJjaGFuZ2VcIiwoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy50b3BpY3MubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yOkFjdGl2aXR5SW5kaWNhdG9yID0gQ2F0ZWdvcnlQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMudG9waWNzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBDYXRlZ29yeVBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZVRvVG9waWModG9waWNJbmRleDogYW55KXtcbiAgICAgICAgbGV0IHRvcGljID0gdGhpcy50b3BpY3MuZ2V0SXRlbSh0b3BpY0luZGV4LmluZGV4KTtcbiAgICAgICAgbGV0IHRvcGljSWQgPSB0b3BpYy5pZDtcbiAgICAgICAgbGV0IHRvcGljVGl0bGUgPSB0b3BpYy50aXRsZTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZXMvdG9waWMvdG9waWNWaWV3XCIsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdG9waWNJZDogdG9waWNJZCxcbiAgICAgICAgICAgICAgICB0b3BpY1RpdGxlOiB0b3BpY1RpdGxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==