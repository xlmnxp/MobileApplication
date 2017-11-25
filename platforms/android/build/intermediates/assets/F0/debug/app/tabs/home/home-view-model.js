"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLDJFQUF5RTtBQUt6RTtJQUFtQyxpQ0FBVTtJQUV6Qyx1QkFBbUIsUUFBb0I7UUFBdkMsWUFDSSxpQkFBTyxTQWlCVjtRQWxCa0IsY0FBUSxHQUFSLFFBQVEsQ0FBWTtRQUR2QyxnQkFBVSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHdEQsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNqRSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxjQUFjLEdBQVksUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3JFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbkQsY0FBYyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxDQUFDO1FBRUgsS0FBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQ3hCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBLENBQUM7Z0JBQzNCLElBQUksaUJBQWlCLEdBQXFCLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzFFLGlCQUFpQixDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7WUFDOUMsQ0FBQztZQUFBLElBQUksQ0FBQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUNsQyxJQUFJLGlCQUFpQixHQUFxQixRQUFRLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUMxRSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO1lBQzdDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBckJELENBQW1DLHVCQUFVLEdBcUI1QztBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd1aS9saXN0LXZpZXcnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgY2F0ZWdvcmllczpPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBIb21lUGFnZTpTdGFja0xheW91dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vYW9zdXMub3JnL2NhdGVnb3JpZXMuanNvblwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgICBsZXQgY2F0ZWdvcmllc0xpc3Q6TGlzdFZpZXcgPSBIb21lUGFnZS5nZXRWaWV3QnlJZChcImNhdGVnb3JpZXNMaXN0XCIpO1xuICAgICAgICAgICAgdGhpcy5jYXRlZ29yaWVzLnB1c2gocmVzLmNhdGVnb3J5X2xpc3QuY2F0ZWdvcmllcyk7XG4gICAgICAgICAgICBjYXRlZ29yaWVzTGlzdC5yZWZyZXNoKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2F0ZWdvcmllcy5vbihcImNoYW5nZVwiLCgpPT57XG4gICAgICAgICAgICBpZih0aGlzLmNhdGVnb3JpZXMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yOkFjdGl2aXR5SW5kaWNhdG9yID0gSG9tZVBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5jYXRlZ29yaWVzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBIb21lUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19