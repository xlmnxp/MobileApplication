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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzZWFyY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFHekUscUNBQXFDO0FBQ3JDLCtCQUFrQztBQUNsQyw0RkFBZ0Y7QUFDaEYsdUNBQXNDO0FBQ3RDLGtDQUFtQztBQUduQztJQUFxQyxtQ0FBVTtJQUszQyx5QkFBbUIsVUFBc0I7UUFBekMsWUFDSSxpQkFBTyxTQWVWO1FBaEJrQixnQkFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpuQixrQkFBWSxHQUF3QixJQUFJLGtDQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFNOUUsS0FBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELEtBQUksQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELEtBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUMvQyxLQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFFM0MsS0FBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUMzQyxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUM3QixLQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUNuRCxDQUFDO1lBQUEsSUFBSSxDQUFDLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFB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QkFDaEIsVUFBVSxFQUFFLFVBQVU7YUFDekI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBeEVxQjtRQUFyQixrREFBa0IsRUFBRTtrQ0FBYyxrQ0FBZTt5REFBZ0M7SUF5RXRGLHNCQUFDO0NBQUEsQUExRUQsQ0FBcUMsdUJBQVUsR0EwRTlDO0FBMUVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBBY3Rpdml0eUluZGljYXRvciB9IGZyb20gXCJ1aS9hY3Rpdml0eS1pbmRpY2F0b3JcIjtcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gXCJ1aS9zZWFyY2gtYmFyXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInVpL2ZyYW1lXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuXG5leHBvcnQgY2xhc3MgU2VhcmNoVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgQE9ic2VydmFibGVQcm9wZXJ0eSgpIHNlYXJjaFJlc3VsdDpPYnNlcnZhYmxlQXJyYXk8YW55PiA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoW10pOyAgICBcbiAgICBzZWFyY2hiYXI6IFNlYXJjaEJhcjtcbiAgICBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvcjtcbiAgICBzZWFyY2hNZXNzYWdlOkxhYmVsO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBTZWFyY2hQYWdlOlN0YWNrTGF5b3V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2VhcmNoYmFyID0gU2VhcmNoUGFnZS5nZXRWaWV3QnlJZCgnc2VhcmNoQmFyJyk7XG4gICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3IgPSBTZWFyY2hQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZSA9IFNlYXJjaFBhZ2UuZ2V0Vmlld0J5SWQoJ1NlYXJjaE1lc3NhZ2UnKTtcbiAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0Lm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoTWVzc2FnZS52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICAgICAgaWYodGhpcy5zZWFyY2hSZXN1bHQubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3Rpdml0eUluZGljYXRvci52aXNpYmlsaXR5ID0gXCJjb2xsYXBzZVwiO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5zZWFyY2hSZXN1bHQubGVuZ3RoIDw9IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZG9TZWFyY2goKXtcblxuICAgICAgICBpZihpc0FuZHJvaWQpe1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hiYXIuYW5kcm9pZC5zZXRGb2N1c2FibGUoZmFsc2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuc2VhcmNoUmVzdWx0Lmxlbmd0aCkgeyBcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoUmVzdWx0LnBvcCgpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICAgICAgICB0aGlzLnNlYXJjaE1lc3NhZ2UudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgICAgXG4gICAgICAgIGZldGNoKGAke2NvbmZpZy51cmx9c2VhcmNoLmpzb24/cT0keyBlbmNvZGVVUklDb21wb25lbnQodGhpcy5zZWFyY2hiYXIudGV4dCkgfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGlmKHJlcy50b3BpY3Mpe1xuICAgICAgICAgICAgICAgIGxldCBkYXRhVG9waWNzID0gcmVzLnRvcGljcy5tYXAodG9waWMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmxvY2FsZShcImFyXCIpLmZyb21Ob3coKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0b3BpYy5pbWFnZV91cmwuaW5kZXhPZignaHR0cCcpID09IC0xKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BpYy5pbWFnZV91cmwgPSAoY29uZmlnLnVybCArIFwiLlwiICsgdG9waWMuaW1hZ2VfdXJsKS5yZXBsYWNlKCcuLycsJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0b3BpYy5wb3N0c19jb3VudCAtPSAxOyBcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdG9waWM7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHQucHVzaChkYXRhVG9waWNzKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hNZXNzYWdlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9Ub3BpYyh0b3BpY0luZGV4OiBhbnkpe1xuICAgICAgICBsZXQgdG9waWMgPSB0aGlzLnNlYXJjaFJlc3VsdC5nZXRJdGVtKHRvcGljSW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgdG9waWNJZCA9IHRvcGljLmlkO1xuICAgICAgICBsZXQgdG9waWNUaXRsZSA9IHRvcGljLnRpdGxlO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy90b3BpYy90b3BpY1ZpZXdcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0b3BpY0lkOiB0b3BpY0lkLFxuICAgICAgICAgICAgICAgIHRvcGljVGl0bGU6IHRvcGljVGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19