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
    CategoryViewModel.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        while (this.topics.pop())
            ;
        fetch(config_1.config.url + "c/" + this.categoryId + ".json").then(function (res) { return res.json(); })
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
            pullRefresh.refreshing = false;
            _this.topics.push(dataTopics);
        }).catch(function (err) {
            pullRefresh.refreshing = false;
        });
        ;
    };
    CategoryViewModel.prototype.close = function () {
        frame_1.topmost().goBack();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsMkVBQXlFO0FBSXpFLGtDQUFtQztBQUNuQywrQkFBa0M7QUFDbEMsK0ZBQW1GO0FBQ25GLDBDQUF5QztBQUV6QztJQUF1QyxxQ0FBVTtJQUc3QywyQkFBbUIsWUFBaUIsRUFBUyxVQUFpQixFQUFTLFlBQW1CO1FBQTFGLFlBQ0ksaUJBQU8sU0E2QlY7UUE5QmtCLGtCQUFZLEdBQVosWUFBWSxDQUFLO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFBUyxrQkFBWSxHQUFaLFlBQVksQ0FBTztRQUY3RCxXQUFLLEdBQVUsRUFBRSxDQUFDO1FBQ3pCLFlBQU0sR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR3hFLEtBQUksQ0FBQyxLQUFLLEdBQUcsWUFBWSxDQUFDO1FBQzFCLEtBQUssQ0FBSSxlQUFNLENBQUMsR0FBRyxVQUFLLFVBQVUsVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqRSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRTlFLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO29CQUNoQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8s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S0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVFLENBQUM7Z0JBQ0wsQ0FBQztnQkFFRCxLQUFLLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQztnQkFFdkIsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUVILFdBQVcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2pDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDUixXQUFXLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUM7SUFDUixDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNJLGVBQU8sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUE3RXFCO1FBQXJCLGtEQUFrQixFQUFFOztvREFBMEI7SUFDekI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQVEsa0NBQWU7cURBQWdDO0lBNkVoRix3QkFBQztDQUFBLEFBL0VELENBQXVDLHVCQUFVLEdBK0VoRDtBQS9FWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgdGl0bGU6c3RyaW5nID0gXCJcIjtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgdG9waWNzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgY29uc3RydWN0b3IocHVibGljIENhdGVnb3J5UGFnZTpQYWdlLCBwdWJsaWMgY2F0ZWdvcnlJZDpudW1iZXIsIHB1YmxpYyBjYXRlZ29yeU5hbWU6c3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudGl0bGUgPSBjYXRlZ29yeU5hbWU7XG4gICAgICAgIGZldGNoKGAke2NvbmZpZy51cmx9Yy8ke2NhdGVnb3J5SWR9Lmpzb25gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgICBsZXQgZGF0YVRvcGljcyA9IHJlcy50b3BpY19saXN0LnRvcGljcy5tYXAodG9waWMgPT4ge1xuICAgICAgICAgICAgICAgIHRvcGljLmNyZWF0ZWRfYXQgPSBtb21lbnQodG9waWMuY3JlYXRlZF9hdCkubG9jYWxlKGNvbmZpZy5sYW5ndWFnZSkuZnJvbU5vdygpO1xuXG4gICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsLmluZGV4T2YoJ2h0dHAnKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BpYy5pbWFnZV91cmwgPSAoY29uZmlnLnVybCArIFwiLlwiICsgdG9waWMuaW1hZ2VfdXJsKS5yZXBsYWNlKCcuLycsJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9waWMucG9zdHNfY291bnQgLT0gMTsgXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9waWM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudG9waWNzLnB1c2goZGF0YVRvcGljcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudG9waWNzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMudG9waWNzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IENhdGVnb3J5UGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnRvcGljcy5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yOkFjdGl2aXR5SW5kaWNhdG9yID0gQ2F0ZWdvcnlQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb1RvcGljKHRvcGljSW5kZXg6IGFueSl7XG4gICAgICAgIGxldCB0b3BpYyA9IHRoaXMudG9waWNzLmdldEl0ZW0odG9waWNJbmRleC5pbmRleCk7XG4gICAgICAgIGxldCB0b3BpY0lkID0gdG9waWMuaWQ7XG4gICAgICAgIGxldCB0b3BpY1RpdGxlID0gdG9waWMudGl0bGU7XG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL3RvcGljL3RvcGljVmlld1wiLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRvcGljSWQ6IHRvcGljSWQsXG4gICAgICAgICAgICAgICAgdG9waWNUaXRsZTogdG9waWNUaXRsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVmcmVzaExpc3QoYXJncyl7XG4gICAgICAgIGxldCBwdWxsUmVmcmVzaDpQdWxsVG9SZWZyZXNoID0gYXJncy5vYmplY3Q7XG5cbiAgICAgICAgd2hpbGUodGhpcy50b3BpY3MucG9wKCkpO1xuICAgICAgICBcbiAgICAgICAgZmV0Y2goYCR7Y29uZmlnLnVybH1jLyR7dGhpcy5jYXRlZ29yeUlkfS5qc29uYCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmxvY2FsZShjb25maWcubGFuZ3VhZ2UpLmZyb21Ob3coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwpe1xuICAgICAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwuaW5kZXhPZignaHR0cCcpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljLmltYWdlX3VybCA9IChjb25maWcudXJsICsgXCIuXCIgKyB0b3BpYy5pbWFnZV91cmwpLnJlcGxhY2UoJy4vJywnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0b3BpYy5wb3N0c19jb3VudCAtPSAxOyBcblxuICAgICAgICAgICAgICAgIHJldHVybiB0b3BpYztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnRvcGljcy5wdXNoKGRhdGFUb3BpY3MpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICB9KTs7XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlKCl7XG4gICAgICAgIHRvcG1vc3QoKS5nb0JhY2soKTtcbiAgICB9XG59XG4iXX0=