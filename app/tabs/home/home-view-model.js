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
            var categoriesList = HomePage.getViewById("categoriesList");
            res.category_list.categories = res.category_list.categories.map(function (category) {
                if (category.uploaded_logo) {
                    category.uploaded_logo.url = config_1.config.url + category.uploaded_logo.url;
                }
                return category;
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUl6RSxrQ0FBbUM7QUFDbkMsNEZBQWdGO0FBQ2hGLHVDQUFzQztBQUV0QztJQUFtQyxpQ0FBVTtJQUV6Qyx1QkFBbUIsUUFBb0I7UUFBdkMsWUFDSSxpQkFBTyxTQXVCVjtRQXhCa0IsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQURqQixnQkFBVSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHNUUsS0FBSyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQzVELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLGNBQWMsR0FBWSxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDckUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFVBQUEsUUFBUTtnQkFDcEUsRUFBRSxDQUFBLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7b0JBQ3ZCLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLGVBQU0sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7Z0JBQ3pFLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUM7WUFDeEIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsSUFBSSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUUsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM5QyxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xDLElBQUksaUJBQWlCLEdBQXFCLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFFTSwwQ0FBa0IsR0FBekIsVUFBMEIsYUFBa0I7UUFDeEMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDN0IsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNqQyxlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDZixVQUFVLEVBQUUsaUNBQWlDO1lBQzdDLE9BQU8sRUFBRTtnQkFDTCxVQUFVLEVBQUUsVUFBVTtnQkFDdEIsWUFBWSxFQUFFLFlBQVk7YUFDN0I7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBdENxQjtRQUFyQixrREFBa0IsRUFBRTtrQ0FBWSxrQ0FBZTtxREFBZ0M7SUF1Q3BGLG9CQUFDO0NBQUEsQUF4Q0QsQ0FBbUMsdUJBQVUsR0F3QzVDO0FBeENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGNhdGVnb3JpZXM6T2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSG9tZVBhZ2U6U3RhY2tMYXlvdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmV0Y2goY29uZmlnLnVybCArIFwiY2F0ZWdvcmllcy5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzTGlzdDpMaXN0VmlldyA9IEhvbWVQYWdlLmdldFZpZXdCeUlkKFwiY2F0ZWdvcmllc0xpc3RcIik7XG4gICAgICAgICAgICByZXMuY2F0ZWdvcnlfbGlzdC5jYXRlZ29yaWVzID0gcmVzLmNhdGVnb3J5X2xpc3QuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3J5LnVwbG9hZGVkX2xvZ28pe1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS51cGxvYWRlZF9sb2dvLnVybCA9IGNvbmZpZy51cmwgKyBjYXRlZ29yeS51cGxvYWRlZF9sb2dvLnVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChyZXMuY2F0ZWdvcnlfbGlzdC5jYXRlZ29yaWVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBIb21lUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEhvbWVQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0NhdGVnb3J5KGNhdGVnb3J5SW5kZXg6IGFueSl7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5nZXRJdGVtKGNhdGVnb3J5SW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmlkO1xuICAgICAgICBsZXQgY2F0ZWdvcnlOYW1lID0gY2F0ZWdvcnkubmFtZTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwidGFicy9ob21lL2NhdGVnb3J5L0NhdGVnb3J5Vmlld1wiLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiBjYXRlZ29yeU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19