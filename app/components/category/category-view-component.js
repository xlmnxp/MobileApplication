"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var CategoryViewComponent = /** @class */ (function (_super) {
    __extends(CategoryViewComponent, _super);
    function CategoryViewComponent(Page, categoryId) {
        var _this = _super.call(this) || this;
        _this.Page = Page;
        _this.categoryId = categoryId;
        _this.categoryTopics = new observable_array_1.ObservableArray([]);
        _this.loading = true;
        _this.repeater = _this.Page.getViewById("repeater");
        // console.log('categoryId',categoryId);
        fetch(config_1.config.url + "c/" + categoryId + ".json").then(function (res) { return res.json(); })
            .then(function (res) {
            var dataTopics = res.topic_list.topics.slice(0, 5).map(function (topic) {
                if (topic.image_url) {
                    if (topic.image_url.indexOf('http') == -1) {
                        topic.image_url = (config_1.config.url + "." + topic.image_url).replace('./', '');
                    }
                }
                else {
                    topic.image_url = "~/images/logo.png";
                }
                return topic;
            });
            _this.categoryTopics.push(dataTopics);
        });
        _this.categoryTopics.on("change", function () {
            if (_this.categoryTopics.length > 0) {
                _this.loading = false;
            }
            else if (_this.categoryTopics.length <= 0) {
                _this.loading = true;
            }
        });
        return _this;
    }
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], CategoryViewComponent.prototype, "categoryTopics", void 0);
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", Boolean)
    ], CategoryViewComponent.prototype, "loading", void 0);
    return CategoryViewComponent;
}(observable_1.Observable));
exports.CategoryViewComponent = CategoryViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS12aWV3LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRGQUFnRjtBQUNoRix1Q0FBc0M7QUFDdEMsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUt6RTtJQUEyQyx5Q0FBVTtJQUtqRCwrQkFBbUIsSUFBZ0IsRUFBUyxVQUFpQjtRQUE3RCxZQUNJLGlCQUFPLFNBNEJWO1FBN0JrQixVQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFKaEMsb0JBQWMsR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDN0MsY0FBUSxHQUFZLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFXLFVBQVUsQ0FBQyxDQUFDO1FBS25FLHdDQUF3QztRQUN4QyxLQUFLLENBQUksZUFBTSxDQUFDLEdBQUcsVUFBSyxVQUFVLFVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDakUsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUVMLElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFFdkQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1RSxDQUFDO2dCQUNMLENBQUM7Z0JBQUEsSUFBSSxDQUFBLENBQUM7b0JBQ0YsS0FBSyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUM7WUFDNUIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQWpDcUI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQXVCLGtDQUFlO2lFQUFnQztJQUNyRTtRQUFyQixrREFBa0IsRUFBRTtrQ0FBZ0IsT0FBTzswREFBUTtJQWtDeEQsNEJBQUM7Q0FBQSxBQXBDRCxDQUEyQyx1QkFBVSxHQW9DcEQ7QUFwQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IFJlcGVhdGVyIH0gZnJvbSBcInVpL3JlcGVhdGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBDYXRlZ29yeVZpZXdDb21wb25lbnQgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGNhdGVnb3J5VG9waWNzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHB1YmxpYyBsb2FkaW5nOkJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyByZXBlYXRlcjpSZXBlYXRlciA9IHRoaXMuUGFnZS5nZXRWaWV3QnlJZDxSZXBlYXRlcj4oXCJyZXBlYXRlclwiKTtcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBQYWdlOlN0YWNrTGF5b3V0LCBwdWJsaWMgY2F0ZWdvcnlJZDpudW1iZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY2F0ZWdvcnlJZCcsY2F0ZWdvcnlJZCk7XG4gICAgICAgIGZldGNoKGAke2NvbmZpZy51cmx9Yy8ke2NhdGVnb3J5SWR9Lmpzb25gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG5cbiAgICAgICAgICAgIGxldCBkYXRhVG9waWNzID0gcmVzLnRvcGljX2xpc3QudG9waWNzLnNsaWNlKDAsNSkubWFwKHRvcGljID0+IHtcblxuICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybC5pbmRleE9mKCdodHRwJykgPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWMuaW1hZ2VfdXJsID0gKGNvbmZpZy51cmwgKyBcIi5cIiArIHRvcGljLmltYWdlX3VybCkucmVwbGFjZSgnLi8nLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0b3BpYy5pbWFnZV91cmwgPSBcIn4vaW1hZ2VzL2xvZ28ucG5nXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvcGljO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5VG9waWNzLnB1c2goZGF0YVRvcGljcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5jYXRlZ29yeVRvcGljcy5vbihcImNoYW5nZVwiLCgpPT57XG4gICAgICAgICAgICBpZih0aGlzLmNhdGVnb3J5VG9waWNzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jYXRlZ29yeVRvcGljcy5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG4iXX0=