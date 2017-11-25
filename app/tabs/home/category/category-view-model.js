"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var moment = require("moment");
var CategoryViewModel = /** @class */ (function (_super) {
    __extends(CategoryViewModel, _super);
    function CategoryViewModel(CategoryPage, categoryId) {
        var _this = _super.call(this) || this;
        _this.CategoryPage = CategoryPage;
        _this.categoryId = categoryId;
        _this.topics = new observable_array_1.ObservableArray([]);
        fetch("https://aosus.org/c/" + categoryId + ".json").then(function (res) { return res.json(); })
            .then(function (res) {
            var topicsList = CategoryPage.getViewById("topicsList");
            var dataTopics = res.topic_list.topics.map(function (topic) {
                topic.created_at = moment(topic.created_at).fromNow();
                return topic;
            });
            _this.topics.push(dataTopics);
            topicsList.refresh();
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
    return CategoryViewModel;
}(observable_1.Observable));
exports.CategoryViewModel = CategoryViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhdGVnb3J5LXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFDN0MsMkVBQXlFO0FBSXpFLCtCQUFrQztBQUVsQztJQUF1QyxxQ0FBVTtJQUU3QywyQkFBbUIsWUFBaUIsRUFBUyxVQUFpQjtRQUE5RCxZQUNJLGlCQUFPLFNBcUJWO1FBdEJrQixrQkFBWSxHQUFaLFlBQVksQ0FBSztRQUFTLGdCQUFVLEdBQVYsVUFBVSxDQUFPO1FBRDlELFlBQU0sR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR2xELEtBQUssQ0FBQyx5QkFBdUIsVUFBVSxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RFLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLFVBQVUsR0FBWSxZQUFZLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2pFLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBQzVDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEQsTUFBTSxDQUFDLEtBQUssQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQztZQUNwQixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUN2QixJQUFJLGlCQUFpQixHQUFxQixZQUFZLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM5RSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzlDLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDOUIsSUFBSSxpQkFBaUIsR0FBcUIsWUFBWSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUUsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXpCRCxDQUF1Qyx1QkFBVSxHQXlCaEQ7QUF6QlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd1aS9saXN0LXZpZXcnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgdG9waWNzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgY29uc3RydWN0b3IocHVibGljIENhdGVnb3J5UGFnZTpQYWdlLCBwdWJsaWMgY2F0ZWdvcnlJZDpudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYW9zdXMub3JnL2MvJHtjYXRlZ29yeUlkfS5qc29uYCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgbGV0IHRvcGljc0xpc3Q6TGlzdFZpZXcgPSBDYXRlZ29yeVBhZ2UuZ2V0Vmlld0J5SWQoXCJ0b3BpY3NMaXN0XCIpO1xuICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmZyb21Ob3coKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9waWM7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMudG9waWNzLnB1c2goZGF0YVRvcGljcyk7XG4gICAgICAgICAgICB0b3BpY3NMaXN0LnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy50b3BpY3Mub24oXCJjaGFuZ2VcIiwoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy50b3BpY3MubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yOkFjdGl2aXR5SW5kaWNhdG9yID0gQ2F0ZWdvcnlQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMudG9waWNzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBDYXRlZ29yeVBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==