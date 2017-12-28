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
        fetch(config_1.config.url + "c/" + categoryId + ".json").then(function (res) { return res.json(); })
            .then(function (res) {
            while (_this.categoryTopics.length) {
                _this.categoryTopics.pop();
            }
            var dataTopics = res.topic_list.topics.slice(0, 5).map(function (topic) {
                if (topic.image_url) {
                    if (topic.image_url.indexOf('http') == -1) {
                        topic.image_url = (config_1.config.url + "." + topic.image_url).replace('./', '');
                    }
                }
                else {
                    topic.image_url = "~/images/logo.png";
                }
                return { id: topic.id, title: topic.title, image_url: topic.image_url };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS12aWV3LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRGQUFnRjtBQUNoRix1Q0FBc0M7QUFDdEMsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUl6RTtJQUEyQyx5Q0FBVTtJQUdqRCwrQkFBbUIsSUFBZ0IsRUFBUyxVQUFpQjtRQUE3RCxZQUNJLGlCQUFPLFNBOEJWO1FBL0JrQixVQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFGaEMsb0JBQWMsR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELGFBQU8sR0FBVyxJQUFJLENBQUM7UUFJaEQsS0FBSyxDQUFJLGVBQU0sQ0FBQyxHQUFHLFVBQUssVUFBVSxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2pFLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxPQUFNLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFDLENBQUM7Z0JBQzlCLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDOUIsQ0FBQztZQUVELElBQUksVUFBVSxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFFdkQsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1RSxDQUFDO2dCQUNMLENBQUM7Z0JBQUEsSUFBSSxDQUFBLENBQUM7b0JBQ0YsS0FBSyxDQUFDLFNBQVMsR0FBRyxtQkFBbUIsQ0FBQztnQkFDMUMsQ0FBQztnQkFFRCxNQUFNLENBQUMsRUFBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLFNBQVMsRUFBQyxDQUFDO1lBQ3pFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUM7WUFDNUIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDL0IsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDekIsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUN0QyxLQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUN4QixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQWpDcUI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQXVCLGtDQUFlO2lFQUFnQztJQUNyRTtRQUFyQixrREFBa0IsRUFBRTtrQ0FBZ0IsT0FBTzswREFBUTtJQWtDeEQsNEJBQUM7Q0FBQSxBQXBDRCxDQUEyQyx1QkFBVSxHQW9DcEQ7QUFwQ1ksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSBcInVpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Vmlld0NvbXBvbmVudCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgY2F0ZWdvcnlUb3BpY3M6T2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGxvYWRpbmc6Qm9vbGVhbiA9IHRydWU7XG4gICAgY29uc3RydWN0b3IocHVibGljIFBhZ2U6U3RhY2tMYXlvdXQsIHB1YmxpYyBjYXRlZ29yeUlkOm51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBcbiAgICAgICAgZmV0Y2goYCR7Y29uZmlnLnVybH1jLyR7Y2F0ZWdvcnlJZH0uanNvbmApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIHdoaWxlKHRoaXMuY2F0ZWdvcnlUb3BpY3MubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNhdGVnb3J5VG9waWNzLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZGF0YVRvcGljcyA9IHJlcy50b3BpY19saXN0LnRvcGljcy5zbGljZSgwLDUpLm1hcCh0b3BpYyA9PiB7XG5cbiAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwpe1xuICAgICAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwuaW5kZXhPZignaHR0cCcpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljLmltYWdlX3VybCA9IChjb25maWcudXJsICsgXCIuXCIgKyB0b3BpYy5pbWFnZV91cmwpLnJlcGxhY2UoJy4vJywnJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdG9waWMuaW1hZ2VfdXJsID0gXCJ+L2ltYWdlcy9sb2dvLnBuZ1wiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7aWQ6IHRvcGljLmlkLHRpdGxlOiB0b3BpYy50aXRsZSwgaW1hZ2VfdXJsOiB0b3BpYy5pbWFnZV91cmx9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3J5VG9waWNzLnB1c2goZGF0YVRvcGljcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUb3BpY3Mub24oXCJjaGFuZ2VcIiwoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5jYXRlZ29yeVRvcGljcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuY2F0ZWdvcnlUb3BpY3MubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19