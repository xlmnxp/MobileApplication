"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var frame_1 = require("ui/frame");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel(HomePage) {
        var _this = _super.call(this) || this;
        _this.HomePage = HomePage;
        _this.categories = new observable_array_1.ObservableArray([]);
        fetch(config_1.config.url + "categories.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var categories = res.category_list.categories.map(function (category) {
                if (category.uploaded_logo) {
                    category.uploaded_logo.url = config_1.config.url + category.uploaded_logo.url;
                }
                if (category.description) {
                    category.description = category.description.replace(/<[^>]*>/g, '');
                }
                return category;
            });
            _this.categories.push(categories);
        });
        _this.categories.on("change", function () {
            if (_this.categories.length > 0) {
                var activityIndicator = HomePage.getViewById('loading');
                activityIndicator.visibility = "collapse";
            }
            else if (_this.categories.length <= 0) {
                var activityIndicator = HomePage.getViewById('loading');
                activityIndicator.visibility = "visible";
            }
        });
        return _this;
    }
    HomeViewModel.prototype.navigateToCategory = function (categoryIndex) {
        var category = this.categories.getItem(categoryIndex.index);
        var categoryId = category.id;
        var categoryName = category.name;
        frame_1.topmost().navigate({
            moduleName: "tabs/home/category/CategoryView",
            context: {
                categoryId: categoryId,
                categoryName: categoryName
            }
        });
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], HomeViewModel.prototype, "categories", void 0);
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUd6RSxrQ0FBbUM7QUFDbkMsNEZBQWdGO0FBQ2hGLHVDQUFzQztBQUV0QztJQUFtQyxpQ0FBVTtJQUV6Qyx1QkFBbUIsUUFBb0I7UUFBdkMsWUFDSSxpQkFBTyxTQTBCVjtRQTNCa0IsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQURqQixnQkFBVSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHNUUsS0FBSyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQzVELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRO2dCQUN0RCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQztvQkFDdkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsZUFBTSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztnQkFDekUsQ0FBQztnQkFFRCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQ3hCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLElBQUksaUJBQWlCLEdBQXFCLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDOUMsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNsQyxJQUFJLGlCQUFpQixHQUFxQixRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMxRSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBRU0sMENBQWtCLEdBQXpCLFVBQTBCLGFBQWtCO1FBQ3hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1RCxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO1FBQzdCLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDakMsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2YsVUFBVSxFQUFFLGlDQUFpQztZQUM3QyxPQUFPLEVBQUU7Z0JBQ0wsVUFBVSxFQUFFLFVBQVU7Z0JBQ3RCLFlBQVksRUFBRSxZQUFZO2FBQzdCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXpDcUI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQVksa0NBQWU7cURBQWdDO0lBMENwRixvQkFBQztDQUFBLEFBM0NELENBQW1DLHVCQUFVLEdBMkM1QztBQTNDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBjYXRlZ29yaWVzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgY29uc3RydWN0b3IocHVibGljIEhvbWVQYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGZldGNoKGNvbmZpZy51cmwgKyBcImNhdGVnb3JpZXMuanNvblwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcmllcyA9IHJlcy5jYXRlZ29yeV9saXN0LmNhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IHtcbiAgICAgICAgICAgICAgICBpZihjYXRlZ29yeS51cGxvYWRlZF9sb2dvKXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkudXBsb2FkZWRfbG9nby51cmwgPSBjb25maWcudXJsICsgY2F0ZWdvcnkudXBsb2FkZWRfbG9nby51cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3J5LmRlc2NyaXB0aW9uKXtcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuZGVzY3JpcHRpb24gPSBjYXRlZ29yeS5kZXNjcmlwdGlvbi5yZXBsYWNlKC88W14+XSo+L2csJycpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjYXRlZ29yeTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2goY2F0ZWdvcmllcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5vbihcImNoYW5nZVwiLCgpPT57XG4gICAgICAgICAgICBpZih0aGlzLmNhdGVnb3JpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yOkFjdGl2aXR5SW5kaWNhdG9yID0gSG9tZVBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jYXRlZ29yaWVzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBIb21lUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9DYXRlZ29yeShjYXRlZ29yeUluZGV4OiBhbnkpe1xuICAgICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLmNhdGVnb3JpZXMuZ2V0SXRlbShjYXRlZ29yeUluZGV4LmluZGV4KTtcbiAgICAgICAgbGV0IGNhdGVnb3J5SWQgPSBjYXRlZ29yeS5pZDtcbiAgICAgICAgbGV0IGNhdGVnb3J5TmFtZSA9IGNhdGVnb3J5Lm5hbWU7XG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBcInRhYnMvaG9tZS9jYXRlZ29yeS9DYXRlZ29yeVZpZXdcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5TmFtZTogY2F0ZWdvcnlOYW1lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==