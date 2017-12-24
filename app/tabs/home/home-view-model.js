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
    HomeViewModel.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        while (this.categories.length) {
            this.categories.pop();
        }
        pullRefresh.refreshing = false;
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
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], HomeViewModel.prototype, "categories", void 0);
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUl6RSxrQ0FBbUM7QUFDbkMsNEZBQWdGO0FBQ2hGLHVDQUFzQztBQUV0QztJQUFtQyxpQ0FBVTtJQUV6Qyx1QkFBbUIsUUFBb0I7UUFBdkMsWUFDSSxpQkFBTyxTQTBCVjtRQTNCa0IsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQURqQixnQkFBVSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHNUUsS0FBSyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQzVELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLFVBQVUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRO2dCQUN0RCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQztvQkFDdkIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEdBQUcsZUFBTSxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztnQkFDekUsQ0FBQztnQkFFRCxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztvQkFDckIsUUFBUSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ3ZFLENBQUM7Z0JBRUQsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxVQUFVLENBQUMsSUFB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IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIGNhdGVnb3JpZXM6T2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgSG9tZVBhZ2U6U3RhY2tMYXlvdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmV0Y2goY29uZmlnLnVybCArIFwiY2F0ZWdvcmllcy5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzID0gcmVzLmNhdGVnb3J5X2xpc3QuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3J5LnVwbG9hZGVkX2xvZ28pe1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS51cGxvYWRlZF9sb2dvLnVybCA9IGNvbmZpZy51cmwgKyBjYXRlZ29yeS51cGxvYWRlZF9sb2dvLnVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoY2F0ZWdvcnkuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5kZXNjcmlwdGlvbiA9IGNhdGVnb3J5LmRlc2NyaXB0aW9uLnJlcGxhY2UoLzxbXj5dKj4vZywnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yaWVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBIb21lUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEhvbWVQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb0NhdGVnb3J5KGNhdGVnb3J5SW5kZXg6IGFueSl7XG4gICAgICAgIGxldCBjYXRlZ29yeSA9IHRoaXMuY2F0ZWdvcmllcy5nZXRJdGVtKGNhdGVnb3J5SW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgY2F0ZWdvcnlJZCA9IGNhdGVnb3J5LmlkO1xuICAgICAgICBsZXQgY2F0ZWdvcnlOYW1lID0gY2F0ZWdvcnkubmFtZTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwidGFicy9ob21lL2NhdGVnb3J5L0NhdGVnb3J5Vmlld1wiLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOiBjYXRlZ29yeU5hbWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hMaXN0KGFyZ3Mpe1xuICAgICAgICBsZXQgcHVsbFJlZnJlc2g6UHVsbFRvUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIHdoaWxlKHRoaXMuY2F0ZWdvcmllcy5sZW5ndGgpe1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBwdWxsUmVmcmVzaC5yZWZyZXNoaW5nID0gZmFsc2U7XG5cbiAgICAgICAgZmV0Y2goY29uZmlnLnVybCArIFwiY2F0ZWdvcmllcy5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzID0gcmVzLmNhdGVnb3J5X2xpc3QuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIGlmKGNhdGVnb3J5LnVwbG9hZGVkX2xvZ28pe1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS51cGxvYWRlZF9sb2dvLnVybCA9IGNvbmZpZy51cmwgKyBjYXRlZ29yeS51cGxvYWRlZF9sb2dvLnVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoY2F0ZWdvcnkuZGVzY3JpcHRpb24pe1xuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeS5kZXNjcmlwdGlvbiA9IGNhdGVnb3J5LmRlc2NyaXB0aW9uLnJlcGxhY2UoLzxbXj5dKj4vZywnJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChjYXRlZ29yaWVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19