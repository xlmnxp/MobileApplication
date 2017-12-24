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
                    topic.created_at = moment(topic.created_at).locale(config_1.config.language).fromNow();
                    if (topic.image_url) {
                        if (topic.image_url.indexOf('http') == -1) {
                            topic.image_url = (config_1.config.url + "." + topic.image_url).replace('./', '');
                        }
                    }
                    topic.posts_count -= 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFHekUscUNBQXFDO0FBQ3JDLCtCQUFrQztBQUNsQyw0RkFBZ0Y7QUFDaEYsdUNBQXNDO0FBQ3RDLGtDQUFtQztBQUduQztJQUFxQyxtQ0FBVTtJQUszQyx5QkFBbUIsVUFBc0I7UUFBekMsWUFDSSxpQkFBTyxTQWVWO1FBaEJrQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpuQixrQkFBWSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFNOUUsS0FBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELEtBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFM0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUMzQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUNuRCxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFB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QUFFLE9BQU87Z0JBQ2hCLFVBQVUsRUFBRSxVQUFVO2FBQ3pCO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXhFcUI7UUFBckIsa0RBQWtCLEVBQUU7a0NBQWMsa0NBQWU7eURBQWdDO0lBeUV0RixzQkFBQztDQUFBLEFBMUVELENBQXFDLHVCQUFVLEdBMEU5QztBQTFFWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gJ3VpL2xheW91dHMvc3RhY2stbGF5b3V0JztcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tIFwidWkvc2VhcmNoLWJhclwiO1xuaW1wb3J0IHsgaXNBbmRyb2lkIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ1aS9mcmFtZVwiO1xuaW1wb3J0IHsgTGFiZWwgfSBmcm9tIFwidWkvbGFiZWxcIjtcblxuZXhwb3J0IGNsYXNzIFNlYXJjaFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSBzZWFyY2hSZXN1bHQ6T2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTsgICAgXG4gICAgc2VhcmNoYmFyOiBTZWFyY2hCYXI7XG4gICAgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3I7XG4gICAgc2VhcmNoTWVzc2FnZTpMYWJlbDtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgU2VhcmNoUGFnZTpTdGFja0xheW91dCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNlYXJjaGJhciA9IFNlYXJjaFBhZ2UuZ2V0Vmlld0J5SWQoJ3NlYXJjaEJhcicpO1xuICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yID0gU2VhcmNoUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UgPSBTZWFyY2hQYWdlLmdldFZpZXdCeUlkKCdTZWFyY2hNZXNzYWdlJyk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgdGhpcy5zZWFyY2hNZXNzYWdlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdC5vbihcImNoYW5nZVwiLCgpPT57XG4gICAgICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIGlmKHRoaXMuc2VhcmNoUmVzdWx0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMuc2VhcmNoUmVzdWx0Lmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIGRvU2VhcmNoKCl7XG5cbiAgICAgICAgaWYoaXNBbmRyb2lkKXtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoYmFyLmFuZHJvaWQuc2V0Rm9jdXNhYmxlKGZhbHNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICh0aGlzLnNlYXJjaFJlc3VsdC5sZW5ndGgpIHsgXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFJlc3VsdC5wb3AoKTsgXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgdGhpcy5zZWFyY2hNZXNzYWdlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgICAgICAgIFxuICAgICAgICBmZXRjaChgJHtjb25maWcudXJsfXNlYXJjaC5qc29uP3E9JHsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuc2VhcmNoYmFyLnRleHQpIH1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgICBpZihyZXMudG9waWNzKXtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YVRvcGljcyA9IHJlcy50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9waWMuY3JlYXRlZF9hdCA9IG1vbWVudCh0b3BpYy5jcmVhdGVkX2F0KS5sb2NhbGUoY29uZmlnLmxhbmd1YWdlKS5mcm9tTm93KCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsLmluZGV4T2YoJ2h0dHAnKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9waWMuaW1hZ2VfdXJsID0gKGNvbmZpZy51cmwgKyBcIi5cIiArIHRvcGljLmltYWdlX3VybCkucmVwbGFjZSgnLi8nLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9waWMucG9zdHNfY291bnQgLT0gMTsgXG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRvcGljO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0LnB1c2goZGF0YVRvcGljcyk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBuYXZpZ2F0ZVRvVG9waWModG9waWNJbmRleDogYW55KXtcbiAgICAgICAgbGV0IHRvcGljID0gdGhpcy5zZWFyY2hSZXN1bHQuZ2V0SXRlbSh0b3BpY0luZGV4LmluZGV4KTtcbiAgICAgICAgbGV0IHRvcGljSWQgPSB0b3BpYy5pZDtcbiAgICAgICAgbGV0IHRvcGljVGl0bGUgPSB0b3BpYy50aXRsZTtcbiAgICAgICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgICAgICAgIG1vZHVsZU5hbWU6IFwicGFnZXMvdG9waWMvdG9waWNWaWV3XCIsXG4gICAgICAgICAgICBjb250ZXh0OiB7XG4gICAgICAgICAgICAgICAgdG9waWNJZDogdG9waWNJZCxcbiAgICAgICAgICAgICAgICB0b3BpY1RpdGxlOiB0b3BpY1RpdGxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==