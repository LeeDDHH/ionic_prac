import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//ローカルストレージを用いるためにStorageを組み込む
import { Storage } from '@ionic/storage';

/*
  Generated class for the BookmarkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BookmarkProvider {
  //storageを生成する。
  constructor(public storage: Storage) {}
  
  //ローカルストレージの取得(get)
  get() {
    return this.storage.get("bookmark.events").then(events => {
      return events ? events : {};
    });
  }

  //ローカルストレージの追加/更新(put)
  put(event: any) {
    return this.get().then(events => {
      events[event.event_id] = event;
      return this.storage.set("bookmark.events", events);
    })
  }

  //ローカルストレージの削除(delete)
  delete(event: any) {
    return this.get().then(events => {
      delete events[event.event_id];
      return this.storage.set("bookmark.events", events);
    })
  }
}
