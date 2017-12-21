"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var platform_1 = require("platform");
var moment = require("moment");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var frame_1 = require("ui/frame");
var SearchViewModel = /** @class */ (function (_super) {
    __extends(SearchViewModel, _super);
    function SearchViewModel(SearchPage) {
        var _this = _super.call(this) || this;
        _this.SearchPage = SearchPage;
        _this.searchResult = new observable_array_1.ObservableArray([]);
        _this.searchbar = SearchPage.getViewById('searchBar');
        _this.activityIndicator = SearchPage.getViewById('loading');
        _this.searchMessage = SearchPage.getViewById('SearchMessage');
        _this.activityIndicator.visibility = "collapse";
        _this.searchMessage.visibility = "collapse";
        _this.searchResult.on("change", function () {
            _this.searchMessage.visibility = "collapse";
            if (_this.searchResult.length > 0) {
                _this.activityIndicator.visibility = "collapse";
            }
            else if (_this.searchResult.length <= 0) {
                _this.activityIndicator.visibility = "visible";
            }
        });
        return _this;
    }
    SearchViewModel.prototype.doSearch = function () {
        var _this = this;
        if (platform_1.isAndroid) {
            this.searchbar.android.setFocusable(false);
        }
        while (this.searchResult.length) {
            this.searchResult.pop();
        }
        this.activityIndicator.visibility = "visible";
        this.searchMessage.visibility = "collapse";
        fetch(config_1.config.url + "search.json?q=" + encodeURIComponent(this.searchbar.text)).then(function (res) { return res.json(); })
            .then(function (res) {
            if (res.topics) {
                var dataTopics = res.topics.map(function (topic) {
                    topic.created_at = moment(topic.created_at).locale("ar").fromNow();
                    if (topic.image_url) {
                        if (topic.image_url.indexOf('http') == -1) {
                            topic.image_url = (config_1.config.url + "." + topic.image_url).replace('./', '');
                        }
                    }
                    return topic;
                });
                _this.searchResult.push(dataTopics);
            }
            else {
                _this.activityIndicator.visibility = "collapse";
                _this.searchMessage.visibility = "visible";
            }
        }).catch(function (err) {
            _this.activityIndicator.visibility = "collapse";
        });
    };
    SearchViewModel.prototype.navigateToTopic = function (topicIndex) {
        var topic = this.searchResult.getItem(topicIndex.index);
        var topicId = topic.id;
        var topicTitle = topic.title;
        frame_1.topmost().navigate({
            moduleName: "pages/topic/topicView",
            context: {
                topicId: topicId,
                topicTitle: topicTitle
            }
        });
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], SearchViewModel.prototype, "searchResult", void 0);
    return SearchViewModel;
}(observable_1.Observable));
exports.SearchViewModel = SearchViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFHekUscUNBQXFDO0FBQ3JDLCtCQUFrQztBQUNsQyw0RkFBZ0Y7QUFDaEYsdUNBQXNDO0FBQ3RDLGtDQUFtQztBQUduQztJQUFxQyxtQ0FBVTtJQUszQyx5QkFBbUIsVUFBc0I7UUFBekMsWUFDSSxpQkFBTyxTQWVWO1FBaEJrQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpuQixrQkFBWSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFNOUUsS0FBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELEtBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFM0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUMzQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUNuRCxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFB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Q0FBQztJQUNQLENBQUM7SUF0RXFCO1FBQXJCLGtEQUFrQixFQUFFO2tDQUFjLGtDQUFlO3lEQUFnQztJQXVFdEYsc0JBQUM7Q0FBQSxBQXhFRCxDQUFxQyx1QkFBVSxHQXdFOUM7QUF4RVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tICd1aS9sYXlvdXRzL3N0YWNrLWxheW91dCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IHsgU2VhcmNoQmFyIH0gZnJvbSBcInVpL3NlYXJjaC1iYXJcIjtcbmltcG9ydCB7IGlzQW5kcm9pZCB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCBtb21lbnQgPSByZXF1aXJlKFwibW9tZW50XCIpO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZVByb3BlcnR5IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9vYnNlcnZhYmxlLXByb3BlcnR5LWRlY29yYXRvclwiO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidWkvZnJhbWVcIjtcbmltcG9ydCB7IExhYmVsIH0gZnJvbSBcInVpL2xhYmVsXCI7XG5cbmV4cG9ydCBjbGFzcyBTZWFyY2hWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgc2VhcmNoUmVzdWx0Ok9ic2VydmFibGVBcnJheTxhbnk+ID0gbmV3IE9ic2VydmFibGVBcnJheShbXSk7ICAgIFxuICAgIHNlYXJjaGJhcjogU2VhcmNoQmFyO1xuICAgIGFjdGl2aXR5SW5kaWNhdG9yOkFjdGl2aXR5SW5kaWNhdG9yO1xuICAgIHNlYXJjaE1lc3NhZ2U6TGFiZWw7XG4gICAgY29uc3RydWN0b3IocHVibGljIFNlYXJjaFBhZ2U6U3RhY2tMYXlvdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zZWFyY2hiYXIgPSBTZWFyY2hQYWdlLmdldFZpZXdCeUlkKCdzZWFyY2hCYXInKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvciA9IFNlYXJjaFBhZ2UuZ2V0Vmlld0J5SWQoJ2xvYWRpbmcnKTtcbiAgICAgICAgdGhpcy5zZWFyY2hNZXNzYWdlID0gU2VhcmNoUGFnZS5nZXRWaWV3QnlJZCgnU2VhcmNoTWVzc2FnZScpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQub24oXCJjaGFuZ2VcIiwoKT0+e1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hNZXNzYWdlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICBpZih0aGlzLnNlYXJjaFJlc3VsdC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLnNlYXJjaFJlc3VsdC5sZW5ndGggPD0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBkb1NlYXJjaCgpe1xuXG4gICAgICAgIGlmKGlzQW5kcm9pZCl7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaGJhci5hbmRyb2lkLnNldEZvY3VzYWJsZShmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAodGhpcy5zZWFyY2hSZXN1bHQubGVuZ3RoKSB7IFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQucG9wKCk7IFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICAgICAgICBcbiAgICAgICAgZmV0Y2goYCR7Y29uZmlnLnVybH1zZWFyY2guanNvbj9xPSR7IGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLnNlYXJjaGJhci50ZXh0KSB9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgaWYocmVzLnRvcGljcyl7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGFUb3BpY3MgPSByZXMudG9waWNzLm1hcCh0b3BpYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvcGljLmNyZWF0ZWRfYXQgPSBtb21lbnQodG9waWMuY3JlYXRlZF9hdCkubG9jYWxlKFwiYXJcIikuZnJvbU5vdygpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybC5pbmRleE9mKCdodHRwJykgPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvcGljLmltYWdlX3VybCA9IChjb25maWcudXJsICsgXCIuXCIgKyB0b3BpYy5pbWFnZV91cmwpLnJlcGxhY2UoJy4vJywnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0b3BpYztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdC5wdXNoKGRhdGFUb3BpY3MpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbmF2aWdhdGVUb1RvcGljKHRvcGljSW5kZXg6IGFueSl7XG4gICAgICAgIGxldCB0b3BpYyA9IHRoaXMuc2VhcmNoUmVzdWx0LmdldEl0ZW0odG9waWNJbmRleC5pbmRleCk7XG4gICAgICAgIGxldCB0b3BpY0lkID0gdG9waWMuaWQ7XG4gICAgICAgIGxldCB0b3BpY1RpdGxlID0gdG9waWMudGl0bGU7XG4gICAgICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICAgICAgICBtb2R1bGVOYW1lOiBcInBhZ2VzL3RvcGljL3RvcGljVmlld1wiLFxuICAgICAgICAgICAgY29udGV4dDoge1xuICAgICAgICAgICAgICAgIHRvcGljSWQ6IHRvcGljSWQsXG4gICAgICAgICAgICAgICAgdG9waWNUaXRsZTogdG9waWNUaXRsZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=