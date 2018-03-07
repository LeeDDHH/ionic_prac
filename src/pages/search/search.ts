import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

    keywords: string = "";
    //検索結果のイベントを保持する、eventsプロパティを追加
    events: any[] = [];
    
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public eventProvider: EventProvider,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

    getEvents(ev) {
        console.log(this.keywords);
        const searchKeywords:string = this.keywords.trim();

        if (!searchKeywords) return;

        const loader = this.loadingCtrl.create({
        content: "Please wait..."
        });
        loader.present();

        const kwds = searchKeywords.split(' ').filter(v => v !== "");
        this.eventProvider.search(kwds).subscribe((body: any) => {
        if (body && body.events) {
          if (this.keywords === searchKeywords) {
              this.events = body.events;
         }
        }
        loader.dismiss();
        }, (error: any) => {
        loader.dismiss();
        })
    }
    //イベント検索画面のリストをクリック時に、openEventメソッド経由でイベント詳細画面を呼び出す処理
    openEvent(event) {
      this.navCtrl.push('EventDetailPage', {
        eventId: event.event_id,
        event: event
      });
    }
}
