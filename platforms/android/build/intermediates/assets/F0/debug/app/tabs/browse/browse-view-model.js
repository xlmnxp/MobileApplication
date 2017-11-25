"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var moment = require("moment");
var BrowseViewModel = /** @class */ (function (_super) {
    __extends(BrowseViewModel, _super);
    function BrowseViewModel(BrowserPage) {
        var _this = _super.call(this) || this;
        _this.BrowserPage = BrowserPage;
        _this.latestTopics = new observable_array_1.ObservableArray([]);
        fetch("https://aosus.org/latest.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var latestTopicsList = BrowserPage.getViewById("latestTopicsList");
            var dataTopics = res.topic_list.topics.map(function (topic) {
                topic.created_at = moment;
                return topic;
            });
            _this.latestTopics.push(dataTopics);
            latestTopicsList.refresh();
        });
        _this.latestTopics.on("change", function () {
            if (_this.latestTopics.length > 0) {
                var activityIndicator = BrowserPage.getViewById('loading');
                activityIndicator.visibility = "collapse";
            }
            else if (_this.latestTopics.length <= 0) {
                var activityIndicator = BrowserPage.getViewById('loading');
                activityIndicator.visibility = "visible";
            }
        });
        return _this;
    }
    BrowseViewModel.prototype.DateToString = function (date) {
        return (new Date(date)
            .toDateString());
    };
    return BrowseViewModel;
}(observable_1.Observable));
exports.BrowseViewModel = BrowseViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFHekUsK0JBQWtDO0FBRWxDO0lBQXFDLG1DQUFVO0lBRTNDLHlCQUFtQixXQUF1QjtRQUExQyxZQUNJLGlCQUFPLFNBcUJWO1FBdEJrQixpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQURuQyxrQkFBWSxHQUF5QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFHaEUsS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUM3RCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxnQkFBZ0IsR0FBWSxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLENBQUM7WUFDNUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDNUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUE7Z0JBQ3pCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNuQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUMvQixDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQztZQUMxQixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUM3QixJQUFJLGlCQUFpQixHQUFxQixXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3RSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzlDLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDcEMsSUFBSSxpQkFBaUIsR0FBcUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0UsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVELHNDQUFZLEdBQVosVUFBYSxJQUFRO1FBQ2pCLE1BQU0sQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQzthQUNyQixZQUFZLEVBQUUsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFDTCxzQkFBQztBQUFELENBQUMsQUE5QkQsQ0FBcUMsdUJBQVUsR0E4QjlDO0FBOUJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgTGlzdFZpZXcgfSBmcm9tICd1aS9saXN0LXZpZXcnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd1aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBwdWJsaWMgbGF0ZXN0VG9waWNzOiBPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBCcm93c2VyUGFnZTpTdGFja0xheW91dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBmZXRjaChcImh0dHBzOi8vYW9zdXMub3JnL2xhdGVzdC5qc29uXCIpLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgbGF0ZXN0VG9waWNzTGlzdDpMaXN0VmlldyA9IEJyb3dzZXJQYWdlLmdldFZpZXdCeUlkKFwibGF0ZXN0VG9waWNzTGlzdFwiKTtcbiAgICAgICAgICAgIGxldCBkYXRhVG9waWNzID0gcmVzLnRvcGljX2xpc3QudG9waWNzLm1hcCh0b3BpYyA9PiB7XG4gICAgICAgICAgICAgICAgdG9waWMuY3JlYXRlZF9hdCA9IG1vbWVudFxuICAgICAgICAgICAgICAgIHJldHVybiB0b3BpYztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sYXRlc3RUb3BpY3MucHVzaChkYXRhVG9waWNzKTtcbiAgICAgICAgICAgIGxhdGVzdFRvcGljc0xpc3QucmVmcmVzaCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmxhdGVzdFRvcGljcy5vbihcImNoYW5nZVwiLCgpPT57XG4gICAgICAgICAgICBpZih0aGlzLmxhdGVzdFRvcGljcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBCcm93c2VyUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmxhdGVzdFRvcGljcy5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICAgICAgdmFyIGFjdGl2aXR5SW5kaWNhdG9yOkFjdGl2aXR5SW5kaWNhdG9yID0gQnJvd3NlclBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgICAgICAgICBhY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIERhdGVUb1N0cmluZyhkYXRlOmFueSk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKGRhdGUpXG4gICAgICAgIC50b0RhdGVTdHJpbmcoKSk7XG4gICAgfVxufVxuIl19