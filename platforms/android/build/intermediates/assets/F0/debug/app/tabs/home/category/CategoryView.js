"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var category_view_model_1 = require("./category-view-model");
function onNavigatedTo(args) {
    var component = args.object;
    component.bindingContext = new category_view_model_1.CategoryViewModel(component, component.navigationContext.categoryId, component.navigationContext.categoryName);
}
exports.onNavigatedTo = onNavigatedTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQ2F0ZWdvcnlWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsNkRBQTBEO0FBRTFELHVCQUE4QixJQUFlO0lBQ3pDLElBQU0sU0FBUyxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDcEMsU0FBUyxDQUFDLGNBQWMsR0FBRyxJQUFJLHVDQUFpQixDQUFDLFNBQVMsRUFDdEQsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFDdEMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2xELENBQUM7QUFMRCxzQ0FLQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxuaW1wb3J0IHsgQ2F0ZWdvcnlWaWV3TW9kZWwgfSBmcm9tIFwiLi9jYXRlZ29yeS12aWV3LW1vZGVsXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbXBvbmVudC5iaW5kaW5nQ29udGV4dCA9IG5ldyBDYXRlZ29yeVZpZXdNb2RlbChjb21wb25lbnQsXG4gICAgICAgIGNvbXBvbmVudC5uYXZpZ2F0aW9uQ29udGV4dC5jYXRlZ29yeUlkLFxuICAgICAgICBjb21wb25lbnQubmF2aWdhdGlvbkNvbnRleHQuY2F0ZWdvcnlOYW1lKTtcbn0iXX0=