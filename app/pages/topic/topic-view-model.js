"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var TopicViewModel = /** @class */ (function (_super) {
    __extends(TopicViewModel, _super);
    function TopicViewModel(TopicPage, topicId, topicTitle) {
        var _this = _super.call(this) || this;
        _this.TopicPage = TopicPage;
        _this.topicId = topicId;
        _this.topicTitle = topicTitle;
        _this.title = "";
        _this.title = topicTitle;
        fetch("https://aosus.org/t/topic/" + topicId + ".json").then(function (res) { return res.json(); })
            .then(function (res) {
            var topicView = TopicPage.getViewById("topicView");
            topicView.src = "<style>a {\n              background: #00ff9508;\n              display: block;\n              margin: 5px;\n              color: #0080d0;\n              padding: 7px;\n              border-radius: 5px;\n              border: 3px solid #ffffffad;\n              font-weight: bold;\n              text-decoration: none;\n              text-align: center;\n          }\n          * {\n              direction: rtl;\n          }\n          img{\n              width: 100%;\n              min-width: 100%;\n              max-width: 100%;\n          }\n          code{\n              word-wrap: break-word;\n          }\n          \n          img.emoji {\n              width: 1em;\n              min-width: 1em;\n              max-width: 1em;\n          }</style>"
                + res.post_stream.posts[0].cooked;
        });
        return _this;
    }
    __decorate([
        observable_property_decorator_1.ObservableProperty(),
        __metadata("design:type", String)
    ], TopicViewModel.prototype, "title", void 0);
    return TopicViewModel;
}(observable_1.Observable));
exports.TopicViewModel = TopicViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvcGljLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFNN0MsNEZBQWdGO0FBRWhGO0lBQW9DLGtDQUFVO0lBRTFDLHdCQUFtQixTQUFjLEVBQVMsT0FBYyxFQUFTLFVBQWlCO1FBQWxGLFlBQ0ksaUJBQU8sU0FvQ1Y7UUFyQ2tCLGVBQVMsR0FBVCxTQUFTLENBQUs7UUFBUyxhQUFPLEdBQVAsT0FBTyxDQUFPO1FBQVMsZ0JBQVUsR0FBVixVQUFVLENBQU87UUFENUQsV0FBSyxHQUFVLEVBQUUsQ0FBQztRQUdwQyxLQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN4QixLQUFLLENBQUMsK0JBQTZCLE9BQU8sVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN6RSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxTQUFTLEdBQVcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxTQUFTLENBQUMsR0FBRyxHQUFHLHl2QkE0QlI7a0JBQ04sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUF0Q3FCO1FBQXJCLGtEQUFrQixFQUFFOztpREFBbUI7SUF1QzVDLHFCQUFDO0NBQUEsQUF4Q0QsQ0FBb0MsdUJBQVUsR0F3QzdDO0FBeENZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ3VpL3dlYi12aWV3JztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3BpY1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSB0aXRsZTpzdHJpbmcgPSBcIlwiO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBUb3BpY1BhZ2U6UGFnZSwgcHVibGljIHRvcGljSWQ6bnVtYmVyLCBwdWJsaWMgdG9waWNUaXRsZTpzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRvcGljVGl0bGU7XG4gICAgICAgIGZldGNoKGBodHRwczovL2Fvc3VzLm9yZy90L3RvcGljLyR7dG9waWNJZH0uanNvbmApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICAgIGxldCB0b3BpY1ZpZXc6V2ViVmlldyA9IFRvcGljUGFnZS5nZXRWaWV3QnlJZChcInRvcGljVmlld1wiKTtcbiAgICAgICAgICAgIHRvcGljVmlldy5zcmMgPSBgPHN0eWxlPmEge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDBmZjk1MDg7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgICAgICAgY29sb3I6ICMwMDgwZDA7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmYWQ7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgKiB7XG4gICAgICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY29kZXtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICBpbWcuZW1vamkge1xuICAgICAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDFlbTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxZW07XG4gICAgICAgICAgfTwvc3R5bGU+YFxuICAgICAgICAgICAgKyByZXMucG9zdF9zdHJlYW0ucG9zdHNbMF0uY29va2VkO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=