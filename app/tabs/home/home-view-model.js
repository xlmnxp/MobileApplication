"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.posts = [];
        _this.posts.push({
            avatar: "https://www.aosus.org/uploads/default/original/2X/0/0bd53c60fe7d636a0aafe88ab686c7feea479212.png",
            title: "الدعم وحلول مشاكل المستخدم",
            description: "يهتم هذا القسم بالدعم الفني والحلول فعندما يُشكل عليك أمراً أو لديك حلٌ لأحد المشاكل أرفقه هنا فهذا هو القسم الأنسب"
        });
        return _this;
    }
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRTdDO0lBQW1DLGlDQUFVO0lBRXpDO1FBQUEsWUFDSSxpQkFBTyxTQU9WO1FBTkcsS0FBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDZixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztZQUNaLE1BQU0sRUFBRSxrR0FBa0c7WUFDMUcsS0FBSyxFQUFFLDRCQUE0QjtZQUNuQyxXQUFXLEVBQUUscUhBQXFIO1NBQ3JJLENBQUMsQ0FBQzs7SUFDUCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBWEQsQ0FBbUMsdUJBQVUsR0FXNUM7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBIb21lVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcG9zdHM6YW55W107XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucG9zdHMgPSBbXVxuICAgICAgICB0aGlzLnBvc3RzLnB1c2goe1xuICAgICAgICAgICAgYXZhdGFyOiBcImh0dHBzOi8vd3d3LmFvc3VzLm9yZy91cGxvYWRzL2RlZmF1bHQvb3JpZ2luYWwvMlgvMC8wYmQ1M2M2MGZlN2Q2MzZhMGFhZmU4OGFiNjg2YzdmZWVhNDc5MjEyLnBuZ1wiLFxuICAgICAgICAgICAgdGl0bGU6IFwi2KfZhNiv2LnZhSDZiNit2YTZiNmEINmF2LTYp9mD2YQg2KfZhNmF2LPYqtiu2K/ZhVwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwi2YrZh9iq2YUg2YfYsNinINin2YTZgtiz2YUg2KjYp9mE2K/YudmFINin2YTZgdmG2Yog2YjYp9mE2K3ZhNmI2YQg2YHYudmG2K/ZhdinINmK2Y/YtNmD2YQg2LnZhNmK2YMg2KPZhdix2KfZiyDYo9mIINmE2K/ZitmDINit2YTZjCDZhNij2K3YryDYp9mE2YXYtNin2YPZhCDYo9ix2YHZgtmHINmH2YbYpyDZgdmH2LDYpyDZh9mIINin2YTZgtiz2YUg2KfZhNij2YbYs9ioXCJcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19