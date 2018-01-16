"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_property_decorator_1 = require("../shared/observable-property-decorator");
var TabsViewModel = /** @class */ (function (_super) {
    __extends(TabsViewModel, _super);
    function TabsViewModel(Page) {
        var _this = _super.call(this) || this;
        _this.Page = Page;
        return _this;
    }
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], TabsViewModel.prototype, "title", void 0);
    return TabsViewModel;
}(observable_1.Observable));
exports.TabsViewModel = TabsViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRzdDLHlGQUE2RTtBQUc3RTtJQUFtQyxpQ0FBVTtJQUd6Qyx1QkFBbUIsSUFBUztRQUE1QixZQUNJLGlCQUFPLFNBQ1Y7UUFGa0IsVUFBSSxHQUFKLElBQUksQ0FBSzs7SUFFNUIsQ0FBQztJQUpxQjtRQUFyQixrREFBa0IsRUFBRTs7Z0RBQWU7SUFLeEMsb0JBQUM7Q0FBQSxBQU5ELENBQW1DLHVCQUFVLEdBTTVDO0FBTlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5cbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvZnJhbWVcIjtcblxuZXhwb3J0IGNsYXNzIFRhYnNWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBQYWdlOlBhZ2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG4iXX0=