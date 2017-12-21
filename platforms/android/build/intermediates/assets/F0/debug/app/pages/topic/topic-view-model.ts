import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array/observable-array";
import { Page } from 'ui/page';
import { WebView } from 'ui/web-view';
import { Repeater } from 'ui/repeater';
import { ActivityIndicator } from "ui/activity-indicator";
import moment = require("moment");
import { ObservableProperty } from "../../shared/observable-property-decorator";
import { config } from "../../config";

export class TopicViewModel extends Observable {
    @ObservableProperty() public title:string = "";
    @ObservableProperty() public topicInfo:object = {};
    // @ObservableProperty() public topicReplies:ObservableArray<any> = new ObservableArray([]);
    @ObservableProperty() public topicReplies = [];
    constructor(public TopicPage:Page, public topicId:number, public topicTitle:string) {
        super();
        this.title = topicTitle;
        fetch(`${config.url}t/topic/${topicId}.json`).then(res => res.json())
        .then(res =>{
            let topicView:WebView = TopicPage.getViewById("topicView");            
            res.post_stream.posts = res.post_stream.posts.map(post =>{

                post.created_at = moment(post.created_at).locale("ar").fromNow();
                
                post.cooked = `<style>a {
                    background: #00ff9508;
                    display: block;
                    margin: 5px;
                    color: #0080d0;
                    padding: 7px;
                    border-radius: 5px;
                    border: 3px solid #ffffffad;
                    font-weight: bold;
                    text-decoration: none;
                    text-align: center;
                }
                * {
                    direction: rtl;
                    font-size: 100%;
                }
                img {
                    width: 100%;
                    min-width: 100%;
                    max-width: 100%;
                    height: auto;
                }
                code,pre {
                    word-wrap: break-word;
                    direction: ltr !important;
                    text-align: left !important;
                }
                pre code {
                    display: block;
                    padding: 5px 10px;
                    color: #222;
                    background: #f9f9f9;
                    max-height: 500px;
                }
                img.emoji {
                    width: 1em;
                    min-width: 1em;
                    max-width: 1em;
                    margin-left: 2px;
                    margin-right: 2px;
                }
                article, aside, details, figcaption, figure, footer, header, hgroup, main, nav, section, summary {
                    display: block;
                }
                aside.onebox {
                    border: 5px solid #e9e9e9;
                    padding: 12px 12px 12px 25px;
                    font-size: 1em;
                }
                aside.onebox .onebox-body {
                    clear: both;
                }
                aside.onebox .onebox-body [style*="--aspect-ratio"] {
                    position: relative;
                }
                .badge-notification.clicks {
                    font-weight: normal;
                    background-color: #e9e9e9;
                    top: -1px;
                    color: #919191;
                    position: relative;
                    margin-right: 2px;
                    border: none;
                }
                aside.onebox .onebox-body h3, aside.onebox .onebox-body h4 {
                    font-size: 1.17em;
                    margin: 0 0 10px 0;
                }
                .quote .avatar{
                    height: 1.25em !important;
                    width: 1.25em !important;
                    min-height: 0%;
                    min-width: 0%;
                    max-height: 100%;
                    max-width: 100%;
                    border-radius: 50%;
                }
                aside.quote .title {
                    border-right: 5px solid #e9e9e9;
                    background-color: #f9f9f9;
                    color: #646464;
                    padding: 12px 12px 1px 12px;
                }
                blockquote {
                    margin-right: 0;
                    margin-left: 0;
                    padding: 12px;
                    border-right: 5px solid #e9e9e9;
                    background-color: #f9f9f9;
                    clear: both;
                }
                aside.quote blockquote {
                    margin-top: 0;
                }</style>`.trim()
            + post.cooked;

                if(post.avatar_template){
                    if(post.avatar_template.indexOf('http') == -1){
                        post.avatar_template = (config.url + "." + post.avatar_template.replace("{size}","80")).replace('./','');
                    }
                }
                return post;
            });

            let topicReplies:Repeater = TopicPage.getViewById('topicReplies');
            let replies = JSON.parse(JSON.stringify(res.post_stream.posts));
            replies.shift();
            
            this.topicInfo = res.post_stream.posts[0];
            this.topicReplies = replies;

            topicReplies.refresh();

        });
    }
}
