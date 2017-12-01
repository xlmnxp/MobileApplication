import { Observable } from "data/observable";
import { ObservableArray } from "data/observable-array/observable-array";
import { Page } from 'ui/page';
import { WebView } from 'ui/web-view';
import { ActivityIndicator } from "ui/activity-indicator";
import moment = require("moment");

export class TopicViewModel extends Observable {
    public title:string = "";
    constructor(public TopicPage:Page, public topicId:number, public topicTitle:string) {
        super();
        this.title = topicTitle;
        fetch(`https://aosus.org/t/topic/${topicId}.json`).then(res => res.json())
        .then(res =>{
            let topicView:WebView = TopicPage.getViewById("topicView");
            topicView.src = `<style>a {
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
          }
          img{
              width: 100%;
              min-width: 100%;
              max-width: 100%;
          }
          code{
              word-wrap: break-word;
          }
          
          img.emoji {
              width: 1em;
              min-width: 1em;
              max-width: 1em;
          }</style>`
            + res.post_stream.posts[0].cooked;
        });
    }
}