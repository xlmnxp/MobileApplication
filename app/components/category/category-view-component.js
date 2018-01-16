"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array");
var CategoryViewComponent = /** @class */ (function (_super) {
    __extends(CategoryViewComponent, _super);
    function CategoryViewComponent(Page, categoryId) {
        var _this = _super.call(this) || this;
        _this.Page = Page;
        _this.categoryId = categoryId;
        _this.categoryTopics = new observable_array_1.ObservableArray([]);
        _this.loading = true;
        _this.scrollview = _this.Page.getViewById("scrollview");
        var _categoryId = categoryId;
        fetch(config_1.config.url + "c/" + _categoryId + ".json").then(function (res) { return res.json(); })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktdmlldy1jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXRlZ29yeS12aWV3LWNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRGQUFnRjtBQUNoRix1Q0FBc0M7QUFDdEMsOENBQTZDO0FBQzdDLDBEQUF3RDtBQU14RDtJQUEyQyx5Q0FBVTtJQUtqRCwrQkFBbUIsSUFBZ0IsRUFBUyxVQUFpQjtRQUE3RCxZQUNJLGlCQUFPLFNBNkJWO1FBOUJrQixVQUFJLEdBQUosSUFBSSxDQUFZO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFKaEMsb0JBQWMsR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzlELGFBQU8sR0FBVyxJQUFJLENBQUM7UUFDN0MsZ0JBQVUsR0FBYyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUkvRCxJQUFNLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFL0IsS0FBSyxDQUFJLGVBQU0sQ0FBQyxHQUFHLFVBQUssV0FBVyxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2xFLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFFTCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7Z0JBRXZELEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO29CQUNoQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3RDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxlQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUUsQ0FBQztnQkFDTCxDQUFDO2dCQUFBLElBQUksQ0FBQSxDQUFDO29CQUNGLEtBQUssQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQsTUFBTSxDQUFDLEVBQUMsRUFBRSxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUMsQ0FBQztZQUMxRSxDQUFDLENBQUMsQ0FBQztZQUVILEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQzVCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDdEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDeEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFsQ3FCO1FBQXJCLGtEQUFrQixFQUFFO2tDQUF1QixrQ0FBZTtpRUFBZ0M7SUFDckU7UUFBckIsa0RBQWtCLEVBQUU7a0NBQWdCLE9BQU87MERBQVE7SUFtQ3hELDRCQUFDO0NBQUEsQUFyQ0QsQ0FBMkMsdUJBQVUsR0FxQ3BEO0FBckNZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidWkvbGF5b3V0cy9zdGFjay1sYXlvdXRcIjtcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IHsgUmVwZWF0ZXIgfSBmcm9tIFwidWkvcmVwZWF0ZXJcIjtcbmltcG9ydCB7IFNjcm9sbFZpZXcgfSBmcm9tIFwidWkvc2Nyb2xsLXZpZXdcIjtcblxuZXhwb3J0IGNsYXNzIENhdGVnb3J5Vmlld0NvbXBvbmVudCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBwdWJsaWMgY2F0ZWdvcnlUb3BpY3M6T2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGxvYWRpbmc6Qm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIHNjcm9sbHZpZXc6U2Nyb2xsVmlldyA9IHRoaXMuUGFnZS5nZXRWaWV3QnlJZChcInNjcm9sbHZpZXdcIik7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgUGFnZTpTdGFja0xheW91dCwgcHVibGljIGNhdGVnb3J5SWQ6bnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGNvbnN0IF9jYXRlZ29yeUlkID0gY2F0ZWdvcnlJZDtcblxuICAgICAgICBmZXRjaChgJHtjb25maWcudXJsfWMvJHtfY2F0ZWdvcnlJZH0uanNvbmApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG5cbiAgICAgICAgICAgIGxldCBkYXRhVG9waWNzID0gcmVzLnRvcGljX2xpc3QudG9waWNzLnNsaWNlKDAsNSkubWFwKHRvcGljID0+IHtcblxuICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybC5pbmRleE9mKCdodHRwJykgPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWMuaW1hZ2VfdXJsID0gKGNvbmZpZy51cmwgKyBcIi5cIiArIHRvcGljLmltYWdlX3VybCkucmVwbGFjZSgnLi8nLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICB0b3BpYy5pbWFnZV91cmwgPSBcIn4vaW1hZ2VzL2xvZ28ucG5nXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtpZDogdG9waWMuaWQsIHRpdGxlOiB0b3BpYy50aXRsZSwgaW1hZ2VfdXJsOiB0b3BpYy5pbWFnZV91cmx9O1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuY2F0ZWdvcnlUb3BpY3MucHVzaChkYXRhVG9waWNzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmNhdGVnb3J5VG9waWNzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuY2F0ZWdvcnlUb3BpY3MubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNhdGVnb3J5VG9waWNzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cbiJdfQ==