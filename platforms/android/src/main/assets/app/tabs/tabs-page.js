"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tabs_view_model_1 = require("./tabs-view-model");
/* ***********************************************************
* Use the "onNavigatingTo" handler to initialize data for the whole tab
* navigation layout as a whole.
*************************************************************/
function onNavigatingTo(args) {
    /* ***********************************************************
    * The "onNavigatingTo" event handler lets you detect if the user navigated with a back button.
    * Skipping the re-initialization on back navigation means the user will see the
    * page in the same data state that he left it in before navigating.
    *************************************************************/
    if (args.isBackNavigation) {
        return;
    }
    var page = args.object;
    page.bindingContext = new tabs_view_model_1.TabsViewModel(page);
}
exports.onNavigatingTo = onNavigatingTo;
/* ***********************************************************
* Get the current tab view title and set it as an ActionBar title.
* Learn more about the onSelectedIndexChanged event here:
* https://docs.nativescript.org/cookbook/ui/tab-view#using-selectedindexchanged-event-from-xml
*************************************************************/
function onSelectedIndexChanged(args) {
    var tabView = args.object;
    var bindingContext = tabView.bindingContext;
    var selectedTabViewItem = tabView.items[args.newIndex];
    bindingContext.title = selectedTabViewItem.title;
}
exports.onSelectedIndexChanged = onSelectedIndexChanged;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGFicy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EscURBQWtEO0FBRWxEOzs7OERBRzhEO0FBQzlELHdCQUErQixJQUFtQjtJQUM5Qzs7OztrRUFJOEQ7SUFDOUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztRQUN4QixNQUFNLENBQUM7SUFDWCxDQUFDO0lBRUQsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUUvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksK0JBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNsRCxDQUFDO0FBYkQsd0NBYUM7QUFFRDs7Ozs4REFJOEQ7QUFDOUQsZ0NBQXVDLElBQW1DO0lBQ3RFLElBQU0sT0FBTyxHQUFZLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckMsSUFBTSxjQUFjLEdBQWtCLE9BQU8sQ0FBQyxjQUFjLENBQUM7SUFDN0QsSUFBTSxtQkFBbUIsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV6RCxjQUFjLENBQUMsS0FBSyxHQUFHLG1CQUFtQixDQUFDLEtBQUssQ0FBQztBQUNyRCxDQUFDO0FBTkQsd0RBTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZWxlY3RlZEluZGV4Q2hhbmdlZEV2ZW50RGF0YSwgVGFiVmlldywgVGFiVmlld0l0ZW0gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS90YWItdmlld1wiO1xuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5cbmltcG9ydCB7IFRhYnNWaWV3TW9kZWwgfSBmcm9tIFwiLi90YWJzLXZpZXctbW9kZWxcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogVXNlIHRoZSBcIm9uTmF2aWdhdGluZ1RvXCIgaGFuZGxlciB0byBpbml0aWFsaXplIGRhdGEgZm9yIHRoZSB3aG9sZSB0YWJcbiogbmF2aWdhdGlvbiBsYXlvdXQgYXMgYSB3aG9sZS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgXCJvbk5hdmlnYXRpbmdUb1wiIGV2ZW50IGhhbmRsZXIgbGV0cyB5b3UgZGV0ZWN0IGlmIHRoZSB1c2VyIG5hdmlnYXRlZCB3aXRoIGEgYmFjayBidXR0b24uXG4gICAgKiBTa2lwcGluZyB0aGUgcmUtaW5pdGlhbGl6YXRpb24gb24gYmFjayBuYXZpZ2F0aW9uIG1lYW5zIHRoZSB1c2VyIHdpbGwgc2VlIHRoZVxuICAgICogcGFnZSBpbiB0aGUgc2FtZSBkYXRhIHN0YXRlIHRoYXQgaGUgbGVmdCBpdCBpbiBiZWZvcmUgbmF2aWdhdGluZy5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIGlmIChhcmdzLmlzQmFja05hdmlnYXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcblxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgVGFic1ZpZXdNb2RlbChwYWdlKTtcbn1cblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogR2V0IHRoZSBjdXJyZW50IHRhYiB2aWV3IHRpdGxlIGFuZCBzZXQgaXQgYXMgYW4gQWN0aW9uQmFyIHRpdGxlLlxuKiBMZWFybiBtb3JlIGFib3V0IHRoZSBvblNlbGVjdGVkSW5kZXhDaGFuZ2VkIGV2ZW50IGhlcmU6XG4qIGh0dHBzOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2Nvb2tib29rL3VpL3RhYi12aWV3I3VzaW5nLXNlbGVjdGVkaW5kZXhjaGFuZ2VkLWV2ZW50LWZyb20teG1sXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuZXhwb3J0IGZ1bmN0aW9uIG9uU2VsZWN0ZWRJbmRleENoYW5nZWQoYXJnczogU2VsZWN0ZWRJbmRleENoYW5nZWRFdmVudERhdGEpIHtcbiAgICBjb25zdCB0YWJWaWV3ID0gPFRhYlZpZXc+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgYmluZGluZ0NvbnRleHQgPSA8VGFic1ZpZXdNb2RlbD50YWJWaWV3LmJpbmRpbmdDb250ZXh0O1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiVmlld0l0ZW0gPSB0YWJWaWV3Lml0ZW1zW2FyZ3MubmV3SW5kZXhdO1xuXG4gICAgYmluZGluZ0NvbnRleHQudGl0bGUgPSBzZWxlY3RlZFRhYlZpZXdJdGVtLnRpdGxlO1xufVxuIl19