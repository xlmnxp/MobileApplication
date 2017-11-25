"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var frame_1 = require("ui/frame");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel(HomePage) {
        var _this = _super.call(this) || this;
        _this.HomePage = HomePage;
        _this.categories = new observable_array_1.ObservableArray([]);
        fetch("https://aosus.org/categories.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var categoriesList = HomePage.getViewById("categoriesList");
            res.category_list.categories = res.category_list.categories.map(function (category) {
                var categoryId = category.id;
                var categoryName = category.Name;
                category.navigate = function (e) {
                    // alert('id: ' + categoryId);
                    frame_1.topmost().navigate({
                        moduleName: "tabs/home/category/CategoryView",
                        context: {
                            categoryId: categoryId,
                            categoryName: categoryName
                        }
                    });
                };
                return category;
            });
            _this.categories.push(res.category_list.categories);
            categoriesList.refresh();
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
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUl6RSxrQ0FBbUM7QUFFbkM7SUFBbUMsaUNBQVU7SUFFekMsdUJBQW1CLFFBQW9CO1FBQXZDLFlBQ0ksaUJBQU8sU0FnQ1Y7UUFqQ2tCLGNBQVEsR0FBUixRQUFRLENBQVk7UUFEdkMsZ0JBQVUsR0FBd0IsSUFBSSxrQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBR3RELEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDakUsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLElBQUksY0FBYyxHQUFZLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNyRSxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsVUFBQSxRQUFRO2dCQUNwRSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDO2dCQUM3QixJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDO2dCQUNqQyxRQUFRLENBQUMsUUFBUSxHQUFHLFVBQUEsQ0FBQztvQkFDakIsOEJBQThCO29CQUM5QixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2YsVUFBVSxFQUFFLGlDQUFpQzt3QkFDN0MsT0FBTyxFQUFFOzRCQUNMLFVBQVUsRUFBQyxVQUFVOzRCQUNyQixZQUFZLEVBQUMsWUFBWTt5QkFDNUI7cUJBQ0osQ0FBQyxDQUFDO2dCQUNQLENBQUMsQ0FBQTtnQkFDRCxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ3BCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuRCxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFFSCxLQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUM7WUFDeEIsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDM0IsSUFBSSxpQkFBaUIsR0FBcUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDMUUsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM5QyxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQ2xDLElBQUksaUJBQWlCLEdBQXFCLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7WUFDN0MsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFwQ0QsQ0FBbUMsdUJBQVUsR0FvQzVDO0FBcENZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBMaXN0VmlldyB9IGZyb20gJ3VpL2xpc3Qtdmlldyc7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcblxuZXhwb3J0IGNsYXNzIEhvbWVWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBjYXRlZ29yaWVzOk9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7XG4gICAgY29uc3RydWN0b3IocHVibGljIEhvbWVQYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIGZldGNoKFwiaHR0cHM6Ly9hb3N1cy5vcmcvY2F0ZWdvcmllcy5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGxldCBjYXRlZ29yaWVzTGlzdDpMaXN0VmlldyA9IEhvbWVQYWdlLmdldFZpZXdCeUlkKFwiY2F0ZWdvcmllc0xpc3RcIik7XG4gICAgICAgICAgICByZXMuY2F0ZWdvcnlfbGlzdC5jYXRlZ29yaWVzID0gcmVzLmNhdGVnb3J5X2xpc3QuY2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjYXRlZ29yeUlkID0gY2F0ZWdvcnkuaWQ7XG4gICAgICAgICAgICAgICAgbGV0IGNhdGVnb3J5TmFtZSA9IGNhdGVnb3J5Lk5hbWU7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnkubmF2aWdhdGUgPSBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gYWxlcnQoJ2lkOiAnICsgY2F0ZWdvcnlJZCk7XG4gICAgICAgICAgICAgICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiBcInRhYnMvaG9tZS9jYXRlZ29yeS9DYXRlZ29yeVZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeUlkOmNhdGVnb3J5SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlOYW1lOmNhdGVnb3J5TmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhdGVnb3J5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmNhdGVnb3JpZXMucHVzaChyZXMuY2F0ZWdvcnlfbGlzdC5jYXRlZ29yaWVzKTtcbiAgICAgICAgICAgIGNhdGVnb3JpZXNMaXN0LnJlZnJlc2goKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jYXRlZ29yaWVzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMuY2F0ZWdvcmllcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBIb21lUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmNhdGVnb3JpZXMubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEhvbWVQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=