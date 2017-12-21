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
                topic.created_at = moment(topic.created_at).locale("ar").fromNow();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsMkVBQXlFO0FBR3pFLGtDQUFtQztBQUNuQywrQkFBa0M7QUFDbEMsK0ZBQW1GO0FBQ25GLDBDQUF5QztBQUV6QztJQUF1QyxxQ0FBVTtJQUc3QywyQkFBbUIsWUFBaUIsRUFBUyxVQUFpQixFQUFTLFlBQW1CO1FBQTFGLFlBQ0ksaUJBQU8sU0E2QlY7UUE5QmtCLGtCQUFZLEdBQVosWUFBWSxDQUFLO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFBUyxrQkFBWSxHQUFaLFlBQVksQ0FBTztRQUY3RCxXQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLFlBQU0sR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR3hFLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLEtBQUssQ0FBSSxlQUFNLENBQUMsR0FBRyxVQUFLLFVBQVUsVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqRSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFbkUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1RSxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsS0FBSyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7Z0JBRXZCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQztZQUNwQixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUN2QixJQUFJLGlCQUFpQixHQUFxQixZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzlDLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDOUIsSUFBSSxpQkFBaUIsR0FBcUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUUsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVNLDJDQUFlLEdBQXRCLFVBQXVCLFVBQWU7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDZixVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsVUFBVSxFQUFFLFVBQVU7YUFDekI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBN0NxQjtRQUFyQixrREFBa0IsRUFBRTs7b0RBQTBCO0lBQ3pCO1FBQXJCLGtEQUFrQixFQUFFO2tDQUFRLGtDQUFlO3FEQUFnQztJQTZDaEYsd0JBQUM7Q0FBQSxBQS9DRCxDQUF1Qyx1QkFBVSxHQStDaEQ7QUEvQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSAndWkvZnJhbWUnO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vLi4vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIHRpdGxlOnN0cmluZyA9IFwiXCI7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHRvcGljczpPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBDYXRlZ29yeVBhZ2U6UGFnZSwgcHVibGljIGNhdGVnb3J5SWQ6bnVtYmVyLCBwdWJsaWMgY2F0ZWdvcnlOYW1lOnN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRpdGxlID0gY2F0ZWdvcnlOYW1lO1xuICAgICAgICBmZXRjaChgJHtjb25maWcudXJsfWMvJHtjYXRlZ29yeUlkfS5qc29uYCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmxvY2FsZShcImFyXCIpLmZyb21Ob3coKTtcblxuICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybC5pbmRleE9mKCdodHRwJykgPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWMuaW1hZ2VfdXJsID0gKGNvbmZpZy51cmwgKyBcIi5cIiArIHRvcGljLmltYWdlX3VybCkucmVwbGFjZSgnLi8nLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRvcGljLnBvc3RzX2NvdW50IC09IDE7IFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvcGljO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRvcGljcy5wdXNoKGRhdGFUb3BpY3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRvcGljcy5vbihcImNoYW5nZVwiLCgpPT57XG4gICAgICAgICAgICBpZih0aGlzLnRvcGljcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBDYXRlZ29yeVBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy50b3BpY3MubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IENhdGVnb3J5UGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9Ub3BpYyh0b3BpY0luZGV4OiBhbnkpe1xuICAgICAgICBsZXQgdG9waWMgPSB0aGlzLnRvcGljcy5nZXRJdGVtKHRvcGljSW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgdG9waWNJZCA9IHRvcGljLmlkO1xuICAgICAgICBsZXQgdG9waWNUaXRsZSA9IHRvcGljLnRpdGxlO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy90b3BpYy90b3BpY1ZpZXdcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0b3BpY0lkOiB0b3BpY0lkLFxuICAgICAgICAgICAgICAgIHRvcGljVGl0bGU6IHRvcGljVGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19