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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsMkVBQXlFO0FBR3pFLGtDQUFtQztBQUNuQywrQkFBa0M7QUFDbEMsK0ZBQW1GO0FBQ25GLDBDQUF5QztBQUV6QztJQUF1QyxxQ0FBVTtJQUc3QywyQkFBbUIsWUFBaUIsRUFBUyxVQUFpQixFQUFTLFlBQW1CO1FBQTFGLFlBQ0ksaUJBQU8sU0EyQlY7UUE1QmtCLGtCQUFZLEdBQVosWUFBWSxDQUFLO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFBUyxrQkFBWSxHQUFaLFlBQVksQ0FBTztRQUY3RCxXQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLFlBQU0sR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR3hFLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLEtBQUssQ0FBSSxlQUFNLENBQUMsR0FBRyxVQUFLLFVBQVUsVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqRSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFbkUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1RSxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQ3BCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3ZCLElBQUksaUJBQWlCLEdBQXFCLFlBQVksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDOUMsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUM5QixJQUFJLGlCQUFpQixHQUFxQixZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRU0sMkNBQWUsR0FBdEIsVUFBdUIsVUFBZTtRQUNsQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUUsQ0FBQztRQUN2QixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdCLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNmLFVBQVUsRUFBRSx1QkFBdUI7WUFDbkMsT0FBTyxFQUFFO2dCQUNMLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixVQUFVLEVBQUUsVUFBVTthQUN6QjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUEzQ3FCO1FBQXJCLGtEQUFrQixFQUFFOztvREFBMEI7SUFDekI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQVEsa0NBQWU7cURBQWdDO0lBMkNoRix3QkFBQztDQUFBLEFBN0NELENBQXVDLHVCQUFVLEdBNkNoRDtBQTdDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgdGl0bGU6c3RyaW5nID0gXCJcIjtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgdG9waWNzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgY29uc3RydWN0b3IocHVibGljIENhdGVnb3J5UGFnZTpQYWdlLCBwdWJsaWMgY2F0ZWdvcnlJZDpudW1iZXIsIHB1YmxpYyBjYXRlZ29yeU5hbWU6c3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBjYXRlZ29yeU5hbWU7XG4gICAgICAgIGZldGNoKGAke2NvbmZpZy51cmx9Yy8ke2NhdGVnb3J5SWR9Lmpzb25gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgICBsZXQgZGF0YVRvcGljcyA9IHJlcy50b3BpY19saXN0LnRvcGljcy5tYXAodG9waWMgPT4ge1xuICAgICAgICAgICAgICAgIHRvcGljLmNyZWF0ZWRfYXQgPSBtb21lbnQodG9waWMuY3JlYXRlZF9hdCkubG9jYWxlKFwiYXJcIikuZnJvbU5vdygpO1xuXG4gICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsLmluZGV4T2YoJ2h0dHAnKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BpYy5pbWFnZV91cmwgPSAoY29uZmlnLnVybCArIFwiLlwiICsgdG9waWMuaW1hZ2VfdXJsKS5yZXBsYWNlKCcuLycsJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvcGljO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRvcGljcy5wdXNoKGRhdGFUb3BpY3MpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnRvcGljcy5vbihcImNoYW5nZVwiLCgpPT57XG4gICAgICAgICAgICBpZih0aGlzLnRvcGljcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBDYXRlZ29yeVBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy50b3BpY3MubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IENhdGVnb3J5UGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9Ub3BpYyh0b3BpY0luZGV4OiBhbnkpe1xuICAgICAgICBsZXQgdG9waWMgPSB0aGlzLnRvcGljcy5nZXRJdGVtKHRvcGljSW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgdG9waWNJZCA9IHRvcGljLmlkO1xuICAgICAgICBsZXQgdG9waWNUaXRsZSA9IHRvcGljLnRpdGxlO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy90b3BpYy90b3BpY1ZpZXdcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0b3BpY0lkOiB0b3BpY0lkLFxuICAgICAgICAgICAgICAgIHRvcGljVGl0bGU6IHRvcGljVGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19