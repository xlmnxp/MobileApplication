"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_array_1 = require("data/observable-array/observable-array");
var frame_1 = require("ui/frame");
var moment = require("moment");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var BrowseViewModel = /** @class */ (function (_super) {
    __extends(BrowseViewModel, _super);
    function BrowseViewModel(BrowserPage) {
        var _this = _super.call(this) || this;
        _this.BrowserPage = BrowserPage;
        _this.latestTopics = new observable_array_1.ObservableArray([]);
        fetch(config_1.config.url + "latest.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var topics = res.topic_list.topics.map(function (topic) {
                topic.created_at = moment(topic.created_at).locale(config_1.config.language).fromNow();
                if (topic.image_url) {
                    if (topic.image_url.indexOf('http') == -1) {
                        topic.image_url = (config_1.config.url + "." + topic.image_url).replace('./', '');
                    }
                }
                topic.posts_count -= 1;
                return topic;
            });
            _this.latestTopics.push(topics);
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
    BrowseViewModel.prototype.navigateToTopic = function (topicIndex) {
        var topic = this.latestTopics.getItem(topicIndex.index);
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
    BrowseViewModel.prototype.refreshList = function (args) {
        var _this = this;
        var pullRefresh = args.object;
        while (this.latestTopics.pop())
            ;
        fetch(config_1.config.url + "latest.json").then(function (res) { return res.json(); })
            .then(function (res) {
            var topics = res.topic_list.topics.map(function (topic) {
                topic.created_at = moment(topic.created_at).locale(config_1.config.language).fromNow();
                if (topic.image_url) {
                    if (topic.image_url.indexOf('http') == -1) {
                        topic.image_url = (config_1.config.url + "." + topic.image_url).replace('./', '');
                    }
                }
                topic.posts_count -= 1;
                return topic;
            });
            pullRefresh.refreshing = false;
            _this.latestTopics.push(topics);
        }).catch(function (err) {
            pullRefresh.refreshing = false;
        });
        ;
    };
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", observable_array_1.ObservableArray)
    ], BrowseViewModel.prototype, "latestTopics", void 0);
    return BrowseViewModel;
}(observable_1.Observable));
exports.BrowseViewModel = BrowseViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJicm93c2Utdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUU3QywyRUFBeUU7QUFJekUsa0NBQW1DO0FBRW5DLCtCQUFrQztBQUNsQyw0RkFBZ0Y7QUFDaEYsdUNBQXNDO0FBRXRDO0lBQXFDLG1DQUFVO0lBRTNDLHlCQUFtQixXQUF1QjtRQUExQyxZQUNJLGlCQUFPLFNBNEJWO1FBN0JrQixpQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQURiLGtCQUFZLEdBQXlCLElBQUksa0NBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUd0RixLQUFLLENBQUMsZUFBTSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3hELElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLO2dCQUN4QyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFOUUsRUFBRSxDQUFBLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFBLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQzt3QkFDdEMsS0FBSyxDQUFDLFNBQVMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUM1RSxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsS0FBSyxDQUFDLFdBQVcsSUFBSSxDQUFDLENBQUM7Z0JBRXZCLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztRQUVILEtBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBQztZQUMxQixFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQSxDQUFDO2dCQUM3QixJQUFJLGlCQUFpQixHQUFxQixXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUM3RSxpQkFBaUIsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzlDLENBQUM7WUFBQSxJQUFJLENBQUMsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFDcEMsSUFBSSxpQkFBaUIsR0FBcUIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0UsaUJBQWlCLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztZQUM3QyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUVNLHlDQUFlLEdBQXRCLFVBQXVCLFVBQWU7UUFDbEMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hELElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDZixVQUFVLEVBQUUsdUJBQXVCO1lBQ25DLE9BQU8sRUFBRTtnQkFDTCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsVUFBVSxFQUFFLFVBQVU7YUFDekI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0scUNBQVcsR0FBbEIsVUFBbUIsSUFBSTtRQUF2QixpQkEwQkM7UUF6QkcsSUFBSSxXQUFXLEdBQWlCLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFNUMsT0FBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRTtZQUFDLENBQUM7UUFFL0IsS0FBSyxDQUFDLGVBQU0sQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN4RCxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFVBQUEsS0FBSztnQkFDeEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRTlFLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQSxDQUFDO29CQUNoQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUM7d0JBQ3RDLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxlQUFNLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUMsQ0FBQztvQkFDNUUsQ0FBQztnQkFDTCxDQUFDO2dCQUVELEtBQUssQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO2dCQUV2QixNQUFNLENBQUMsS0FBSyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBRUgsV0FBVyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7WUFDL0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLFdBQVcsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxDQUFDO1FBQUEsQ0FBQztJQUNSLENBQUM7SUF2RXFCO1FBQXJCLGtEQUFrQixFQUFFO2tDQUFzQixrQ0FBZTt5REFBZ0M7SUF3RTlGLHNCQUFDO0NBQUEsQUF6RUQsQ0FBcUMsdUJBQVUsR0F5RTlDO0FBekVZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IFN0YWNrTGF5b3V0IH0gZnJvbSAndWkvbGF5b3V0cy9zdGFjay1sYXlvdXQnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXknO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tICd1aS9hY3Rpdml0eS1pbmRpY2F0b3InO1xuaW1wb3J0IHsgRm9ybWF0dGVkU3RyaW5nIH0gZnJvbSBcInRleHQvZm9ybWF0dGVkLXN0cmluZ1wiO1xuaW1wb3J0IHsgU3BhbiB9IGZyb20gXCJ0ZXh0L3NwYW5cIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tICd1aS9mcmFtZSc7XG5pbXBvcnQgeyBQdWxsVG9SZWZyZXNoIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wdWxsdG9yZWZyZXNoXCI7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcbmltcG9ydCB7IE9ic2VydmFibGVQcm9wZXJ0eSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvb2JzZXJ2YWJsZS1wcm9wZXJ0eS1kZWNvcmF0b3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XG5cbmV4cG9ydCBjbGFzcyBCcm93c2VWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcbiAgICBAT2JzZXJ2YWJsZVByb3BlcnR5KCkgcHVibGljIGxhdGVzdFRvcGljczogT2JzZXJ2YWJsZUFycmF5PGFueT4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5KFtdKTtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgQnJvd3NlclBhZ2U6U3RhY2tMYXlvdXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgZmV0Y2goY29uZmlnLnVybCArIFwibGF0ZXN0Lmpzb25cIikudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGxldCB0b3BpY3MgPSByZXMudG9waWNfbGlzdC50b3BpY3MubWFwKHRvcGljID0+IHtcbiAgICAgICAgICAgICAgICB0b3BpYy5jcmVhdGVkX2F0ID0gbW9tZW50KHRvcGljLmNyZWF0ZWRfYXQpLmxvY2FsZShjb25maWcubGFuZ3VhZ2UpLmZyb21Ob3coKTtcblxuICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRvcGljLmltYWdlX3VybC5pbmRleE9mKCdodHRwJykgPT0gLTEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9waWMuaW1hZ2VfdXJsID0gKGNvbmZpZy51cmwgKyBcIi5cIiArIHRvcGljLmltYWdlX3VybCkucmVwbGFjZSgnLi8nLCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRvcGljLnBvc3RzX2NvdW50IC09IDE7IFxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvcGljO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmxhdGVzdFRvcGljcy5wdXNoKHRvcGljcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubGF0ZXN0VG9waWNzLm9uKFwiY2hhbmdlXCIsKCk9PntcbiAgICAgICAgICAgIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgIHZhciBhY3Rpdml0eUluZGljYXRvcjpBY3Rpdml0eUluZGljYXRvciA9IEJyb3dzZXJQYWdlLmdldFZpZXdCeUlkKCdsb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgYWN0aXZpdHlJbmRpY2F0b3IudmlzaWJpbGl0eSA9IFwiY29sbGFwc2VcIjtcbiAgICAgICAgICAgIH1lbHNlIGlmKHRoaXMubGF0ZXN0VG9waWNzLmxlbmd0aCA8PSAwKXtcbiAgICAgICAgICAgICAgICB2YXIgYWN0aXZpdHlJbmRpY2F0b3I6QWN0aXZpdHlJbmRpY2F0b3IgPSBCcm93c2VyUGFnZS5nZXRWaWV3QnlJZCgnbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIGFjdGl2aXR5SW5kaWNhdG9yLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG5hdmlnYXRlVG9Ub3BpYyh0b3BpY0luZGV4OiBhbnkpe1xuICAgICAgICBsZXQgdG9waWMgPSB0aGlzLmxhdGVzdFRvcGljcy5nZXRJdGVtKHRvcGljSW5kZXguaW5kZXgpO1xuICAgICAgICBsZXQgdG9waWNJZCA9IHRvcGljLmlkO1xuICAgICAgICBsZXQgdG9waWNUaXRsZSA9IHRvcGljLnRpdGxlO1xuICAgICAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJwYWdlcy90b3BpYy90b3BpY1ZpZXdcIixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICB0b3BpY0lkOiB0b3BpY0lkLFxuICAgICAgICAgICAgICAgIHRvcGljVGl0bGU6IHRvcGljVGl0bGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHJlZnJlc2hMaXN0KGFyZ3Mpe1xuICAgICAgICBsZXQgcHVsbFJlZnJlc2g6UHVsbFRvUmVmcmVzaCA9IGFyZ3Mub2JqZWN0O1xuXG4gICAgICAgIHdoaWxlKHRoaXMubGF0ZXN0VG9waWNzLnBvcCgpKTtcblxuICAgICAgICBmZXRjaChjb25maWcudXJsICsgXCJsYXRlc3QuanNvblwiKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgbGV0IHRvcGljcyA9IHJlcy50b3BpY19saXN0LnRvcGljcy5tYXAodG9waWMgPT4ge1xuICAgICAgICAgICAgICAgIHRvcGljLmNyZWF0ZWRfYXQgPSBtb21lbnQodG9waWMuY3JlYXRlZF9hdCkubG9jYWxlKGNvbmZpZy5sYW5ndWFnZSkuZnJvbU5vdygpO1xuXG4gICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsKXtcbiAgICAgICAgICAgICAgICAgICAgaWYodG9waWMuaW1hZ2VfdXJsLmluZGV4T2YoJ2h0dHAnKSA9PSAtMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3BpYy5pbWFnZV91cmwgPSAoY29uZmlnLnVybCArIFwiLlwiICsgdG9waWMuaW1hZ2VfdXJsKS5yZXBsYWNlKCcuLycsJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdG9waWMucG9zdHNfY291bnQgLT0gMTsgXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdG9waWM7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5sYXRlc3RUb3BpY3MucHVzaCh0b3BpY3MpO1xuICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgcHVsbFJlZnJlc2gucmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgICB9KTs7XG4gICAgfVxufVxuIl19