"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
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
    return TopicViewModel;
}(observable_1.Observable));
exports.TopicViewModel = TopicViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9waWMtdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvcGljLXZpZXctbW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw4Q0FBNkM7QUFPN0M7SUFBb0Msa0NBQVU7SUFFMUMsd0JBQW1CLFNBQWMsRUFBUyxPQUFjLEVBQVMsVUFBaUI7UUFBbEYsWUFDSSxpQkFBTyxTQW9DVjtRQXJDa0IsZUFBUyxHQUFULFNBQVMsQ0FBSztRQUFTLGFBQU8sR0FBUCxPQUFPLENBQU87UUFBUyxnQkFBVSxHQUFWLFVBQVUsQ0FBTztRQUQzRSxXQUFLLEdBQVUsRUFBRSxDQUFDO1FBR3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLEtBQUssQ0FBQywrQkFBNkIsT0FBTyxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3pFLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxJQUFJLFNBQVMsR0FBVyxTQUFTLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzNELFNBQVMsQ0FBQyxHQUFHLEdBQUcseXZCQTRCUjtrQkFDTixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7O0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXhDRCxDQUFvQyx1QkFBVSxHQXdDN0M7QUF4Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZS1hcnJheS9vYnNlcnZhYmxlLWFycmF5XCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAndWkvd2ViLXZpZXcnO1xuaW1wb3J0IHsgQWN0aXZpdHlJbmRpY2F0b3IgfSBmcm9tIFwidWkvYWN0aXZpdHktaW5kaWNhdG9yXCI7XG5pbXBvcnQgbW9tZW50ID0gcmVxdWlyZShcIm1vbWVudFwiKTtcblxuZXhwb3J0IGNsYXNzIFRvcGljVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHVibGljIHRpdGxlOnN0cmluZyA9IFwiXCI7XG4gICAgY29uc3RydWN0b3IocHVibGljIFRvcGljUGFnZTpQYWdlLCBwdWJsaWMgdG9waWNJZDpudW1iZXIsIHB1YmxpYyB0b3BpY1RpdGxlOnN0cmluZykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRpdGxlID0gdG9waWNUaXRsZTtcbiAgICAgICAgZmV0Y2goYGh0dHBzOi8vYW9zdXMub3JnL3QvdG9waWMvJHt0b3BpY0lkfS5qc29uYCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4ocmVzID0+e1xuICAgICAgICAgICAgbGV0IHRvcGljVmlldzpXZWJWaWV3ID0gVG9waWNQYWdlLmdldFZpZXdCeUlkKFwidG9waWNWaWV3XCIpO1xuICAgICAgICAgICAgdG9waWNWaWV3LnNyYyA9IGA8c3R5bGU+YSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMwMGZmOTUwODtcbiAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzAwODBkMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmZmZmZmZhZDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgZGlyZWN0aW9uOiBydGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb2Rle1xuICAgICAgICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgIGltZy5lbW9qaSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICAgIG1pbi13aWR0aDogMWVtO1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDFlbTtcbiAgICAgICAgICB9PC9zdHlsZT5gXG4gICAgICAgICAgICArIHJlcy5wb3N0X3N0cmVhbS5wb3N0c1swXS5jb29rZWQ7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==