
import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../twitter.service';

@Component({
  selector: 'lib-twitter-card',
  templateUrl: './twitter-card.component.html',
  styleUrls: ['./twitter-card.component.css']
})


export class TwitterCardComponent implements OnInit {

  //myTimeline: any;
  myTimeline: any;
  twitter_data: any = {
    statuses: [
      { screen_name: "tanzeel", status: "wonderful day, enjoying at beach" },
      { screen_name: "pablo", status: "what a lovely morning #surfing #beach #relax" },
      { screen_name: "ricky", status: "feeling sick :-( #typhoid" }
    ]
  }

  constructor(private api: TwitterService) { }

  ngOnInit() {
    this.getTwitterTimeline();
    //this.myTimeline = <JSON>this.twitter_data;
  }

  getTwitterTimeline(): void {
    this.api.getTimeline()
      .subscribe(
        myTimeline => {
          this.myTimeline = myTimeline;
          console.log(this.myTimeline);
        }
      )
  }
}