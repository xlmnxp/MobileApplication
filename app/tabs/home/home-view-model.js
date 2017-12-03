"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var frame_1 = require("ui/frame");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel(HomePage) {
        var _this = _super.call(this) || this;
        _this.HomePage = HomePage;
        _this.categories = new observable_array_1.ObservableArray([]);
        fetch("https://aosus.org/categories.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var categoriesList = HomePage.getViewById("categoriesList");
            _this.categories.push(res.category_list.categories);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUl6RSxrQ0FBbUM7QUFDbkMsNEZBQWdGO0FBRWhGO0lBQW1DLGlDQUFVO0lBRXpDLHVCQUFtQixRQUFvQjtRQUF2QyxZQUNJLGlCQUFPLFNBZ0JWO1FBakJrQixjQUFRLEdBQVIsUUFBUSxDQUFZO1FBRGpCLGdCQUFVLEdBQXdCLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUc1RSxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ2pFLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLGNBQWMsR0FBWSxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckUsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQztZQUN4QixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUMzQixJQUFJLGlCQUFpQixHQUFxQixRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMxRSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzlDLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDbEMsSUFBSSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUUsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVNLDBDQUFrQixHQUF6QixVQUEwQixhQUFrQjtRQUN4QyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUQsSUFBSSxVQUFVLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ2pDLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNmLFVBQVUsRUFBRSxpQ0FBaUM7WUFDN0MsT0FBTyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxVQUFVO2dCQUN0QixZQUFZLEVBQUUsWUFBWTthQUM3QjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUEvQnFCO1FBQXJCLGtEQUFrQixFQUFFO2tDQUFZLGtDQUFlO3FEQUFnQztJQWdDcEYsb0JBQUM7Q0FBQSxBQWpDRCxDQUFtQyx1QkFBVSxHQWlDNUM7QUFqQ1ksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcbmltcG9ydCB7IExpc3RWaWV3IH0gZnJvbSAndWkvbGlzdC12aWV3JztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBjYXRlZ29yaWVzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgY29uc3RydWN0b3IocHVibGljIEhvbWVQYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hb3N1cy5vcmcvY2F0ZWdvcmllcy5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzTGlzdDpMaXN0VmlldyA9IEhvbWVQYWdlLmdldFZpZXdCeUlkKFwiY2F0ZWdvcmllc0xpc3RcIik7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChyZXMuY2F0ZWdvcnlfbGlzdC5jYXRlZ29yaWVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBIb21lUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEhvbWVQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0NhdGVnb3J5KGNhdGVnb3J5SW5kZXg6IGFueSl7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5nZXRJdGVtKGNhdGVnb3J5SW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmlkO1xuICAgICAgICBsZXQgY2F0ZWdvcnlOYW1lID0gY2F0ZWdvcnkubmFtZTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwidGFicy9ob21lL2NhdGVnb3J5L0NhdGVnb3J5Vmlld1wiLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiBjYXRlZ29yeU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19