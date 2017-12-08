"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var observable_property_decorator_1 = require("../../shared/observable-property-decorator");
var config_1 = require("../../config");
var TopicViewModel = /** @class */ (function (_super) {
    __extends(TopicViewModel, _super);
    function TopicViewModel(TopicPage, topicId, topicTitle) {
        var _this = _super.call(this) || this;
        _this.TopicPage = TopicPage;
        _this.topicId = topicId;
        _this.topicTitle = topicTitle;
        _this.title = "";
        _this.title = topicTitle;
        fetch(config_1.config.url + "t/topic/" + topicId + ".json").then(function (res) { return res.json(); })
            .then(function (res) {
            var topicView = TopicPage.getViewById("topicView");
            topicView.src = "<style>a {\n              background: #00ff9508;\n              display: block;\n              margin: 5px;\n              color: #0080d0;\n              padding: 7px;\n              border-radius: 5px;\n              border: 3px solid #ffffffad;\n              font-weight: bold;\n              text-decoration: none;\n              text-align: center;\n          }\n          * {\n              direction: rtl;\n          }\n          img{\n              width: 100%;\n              min-width: 100%;\n              max-width: 100%;\n              height: auto;\n          }\n\n          code,pre{\n              word-wrap: break-word;\n              direction: ltr;\n          }\n          \n          img.emoji {\n              width: 1em;\n              min-width: 1em;\n              max-width: 1em;\n          }</style>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvcGljLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFNN0MsNEZBQWdGO0FBQ2hGLHVDQUFzQztBQUV0QztJQUFvQyxrQ0FBVTtJQUUxQyx3QkFBbUIsU0FBYyxFQUFTLE9BQWMsRUFBUyxVQUFpQjtRQUFsRixZQUNJLGlCQUFPLFNBdUNWO1FBeENrQixlQUFTLEdBQVQsU0FBUyxDQUFLO1FBQVMsYUFBTyxHQUFQLE9BQU8sQ0FBTztRQUFTLGdCQUFVLEdBQVYsVUFBVSxDQUFPO1FBRDVELFdBQUssR0FBVSxFQUFFLENBQUM7UUFHcEMsS0FBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDeEIsS0FBSyxDQUFJLGVBQU0sQ0FBQyxHQUFHLGdCQUFXLE9BQU8sVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUNwRSxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ0wsSUFBSSxTQUFTLEdBQVcsU0FBUyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUMzRCxTQUFTLENBQUMsR0FBRyxHQUFHLDJ6QkErQlI7a0JBQ04sR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDOztJQUNQLENBQUM7SUF6Q3FCO1FBQXJCLGtEQUFrQixFQUFFOztpREFBbUI7SUEwQzVDLHFCQUFDO0NBQUEsQUEzQ0QsQ0FBb0MsdUJBQVUsR0EyQzdDO0FBM0NZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcbmltcG9ydCB7IE9ic2VydmFibGVBcnJheSB9IGZyb20gXCJkYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgV2ViVmlldyB9IGZyb20gJ3VpL3dlYi12aWV3JztcbmltcG9ydCB7IEFjdGl2aXR5SW5kaWNhdG9yIH0gZnJvbSBcInVpL2FjdGl2aXR5LWluZGljYXRvclwiO1xuaW1wb3J0IG1vbWVudCA9IHJlcXVpcmUoXCJtb21lbnRcIik7XG5pbXBvcnQgeyBPYnNlcnZhYmxlUHJvcGVydHkgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL29ic2VydmFibGUtcHJvcGVydHktZGVjb3JhdG9yXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjbGFzcyBUb3BpY1ZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuICAgIEBPYnNlcnZhYmxlUHJvcGVydHkoKSB0aXRsZTpzdHJpbmcgPSBcIlwiO1xuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBUb3BpY1BhZ2U6UGFnZSwgcHVibGljIHRvcGljSWQ6bnVtYmVyLCBwdWJsaWMgdG9waWNUaXRsZTpzdHJpbmcpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRvcGljVGl0bGU7XG4gICAgICAgIGZldGNoKGAke2NvbmZpZy51cmx9dC90b3BpYy8ke3RvcGljSWR9Lmpzb25gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgICBsZXQgdG9waWNWaWV3OldlYlZpZXcgPSBUb3BpY1BhZ2UuZ2V0Vmlld0J5SWQoXCJ0b3BpY1ZpZXdcIik7XG4gICAgICAgICAgICB0b3BpY1ZpZXcuc3JjID0gYDxzdHlsZT5hIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzAwZmY5NTA4O1xuICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMDA4MGQwO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI2ZmZmZmZmFkO1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICoge1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb2RlLHByZXtcbiAgICAgICAgICAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgICAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgaW1nLmVtb2ppIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxZW07XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMWVtO1xuICAgICAgICAgIH08L3N0eWxlPmBcbiAgICAgICAgICAgICsgcmVzLnBvc3Rfc3RyZWFtLnBvc3RzWzBdLmNvb2tlZDtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19