"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel(page) {
        var _this = _super.call(this) || this;
        _this.page = page;
        _this.posts = [];
        fetch("https://aosus.org/categories.json").then(function (res) { return res.json(); })
            .then(function (res) {
            res.category_list.categories.forEach(function (element) {
                _this.posts.push(element);
                page.getViewById("categoriesList").refresh();
            });
        });
        return _this;
    }
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBSTdDO0lBQW1DLGlDQUFVO0lBRXpDLHVCQUFtQixJQUFnQjtRQUFuQyxZQUNJLGlCQUFPLFNBU1Y7UUFWa0IsVUFBSSxHQUFKLElBQUksQ0FBWTtRQUUvQixLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNmLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDakUsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87Z0JBQ3hDLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUM3RCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFiRCxDQUFtQyx1QkFBVSxHQWE1QztBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd1aS9saXN0LXZpZXcnO1xuXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIHBvc3RzOmFueVtdO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBwYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucG9zdHMgPSBbXVxuICAgICAgICBmZXRjaChcImh0dHBzOi8vYW9zdXMub3JnL2NhdGVnb3JpZXMuanNvblwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgICByZXMuY2F0ZWdvcnlfbGlzdC5jYXRlZ29yaWVzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0cy5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICg8TGlzdFZpZXc+cGFnZS5nZXRWaWV3QnlJZChcImNhdGVnb3JpZXNMaXN0XCIpKS5yZWZyZXNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19