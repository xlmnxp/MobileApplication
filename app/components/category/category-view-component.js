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
        console.log('categoryId', categoryId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS12aWV3LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRGQUFnRjtBQUNoRix1Q0FBc0M7QUFDdEMsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUt6RTtJQUEyQyx5Q0FBVTtJQUtqRCwrQkFBbUIsSUFBZ0IsRUFBUyxVQUFpQjtRQUE3RCxZQUNJLGlCQUFPLFNBNEJWO1FBN0JrQixVQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFKaEMsb0JBQWMsR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDN0MsY0FBUSxHQUFZLEtBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFXLFVBQVUsQ0FBQyxDQUFDO1FBS25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLEtBQUssQ0FBSSxlQUFNLENBQUMsR0FBRyxVQUFLLFVBQVUsVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqRSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBRUwsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUV2RCxFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUEsQ0FBQztvQkFDaEIsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDO3dCQUN0QyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsZUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzVFLENBQUM7Z0JBQ0wsQ0FBQztnQkFBQSxJQUFJLENBQUEsQ0FBQztvQkFDRixLQUFLLENBQUMsU0FBUyxHQUFHLG1CQUFtQixDQUFDO2dCQUMxQyxDQUFDO2dCQUVELE1BQU0sQ0FBQyxFQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFDLENBQUM7WUFDekUsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQztZQUM1QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUMvQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ3RDLEtBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3hCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBakNxQjtRQUFyQixrREFBa0IsRUFBRTtrQ0FBdUIsa0NBQWU7aUVBQWdDO0lBQ3JFO1FBQXJCLGtEQUFrQixFQUFFO2tDQUFnQixPQUFPOzBEQUFRO0lBa0N4RCw0QkFBQztDQUFBLEFBcENELENBQTJDLHVCQUFVLEdBb0NwRDtBQXBDWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IHsgUmVwZWF0ZXIgfSBmcm9tIFwidWkvcmVwZWF0ZXJcIjtcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Vmlld0NvbXBvbmVudCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgY2F0ZWdvcnlUb3BpY3M6T2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGxvYWRpbmc6Qm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHJlcGVhdGVyOlJlcGVhdGVyID0gdGhpcy5QYWdlLmdldFZpZXdCeUlkPFJlcGVhdGVyPihcInJlcGVhdGVyXCIpO1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIFBhZ2U6U3RhY2tMYXlvdXQsIHB1YmxpYyBjYXRlZ29yeUlkOm51bWJlcikge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdjYXRlZ29yeUlkJyxjYXRlZ29yeUlkKTtcbiAgICAgICAgZmV0Y2goYCR7Y29uZmlnLnVybH1jLyR7Y2F0ZWdvcnlJZH0uanNvbmApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcblxuICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3Muc2xpY2UoMCw1KS5tYXAodG9waWMgPT4ge1xuXG4gICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsLmluZGV4T2YoJ2h0dHAnKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BpYy5pbWFnZV91cmwgPSAoY29uZmlnLnVybCArIFwiLlwiICsgdG9waWMuaW1hZ2VfdXJsKS5yZXBsYWNlKCcuLycsJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIHRvcGljLmltYWdlX3VybCA9IFwifi9pbWFnZXMvbG9nby5wbmdcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge2lkOiB0b3BpYy5pZCx0aXRsZTogdG9waWMudGl0bGUsIGltYWdlX3VybDogdG9waWMuaW1hZ2VfdXJsfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yeVRvcGljcy5wdXNoKGRhdGFUb3BpY3MpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUb3BpY3Mub24oXCJjaGFuZ2VcIiwoKT0+e1xuICAgICAgICAgICAgaWYodGhpcy5jYXRlZ29yeVRvcGljcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuY2F0ZWdvcnlUb3BpY3MubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuIl19