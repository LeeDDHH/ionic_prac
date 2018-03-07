import { BrowserModule } from '@angular/platform-browser';
//LOCALE_ID：ユーザーが利用する言語や国・地域を扱う時に使う。
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
//内部で使用されるグローバルのLocaleデータを登録する時に使う。
import { registerLocaleData } from '@angular/common';
//日本のlocaleデータを用いる時に使う。
import localeja from '@angular/common/locales/ja'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//Web Storageを用いるために、IonicStorageModuleを組み込む
import { IonicStorageModule } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { EventProvider } from '../providers/event/event';
import { HttpClientModule } from '@angular/common/http';
import { BookmarkProvider } from '../providers/bookmark/bookmark';

//内部で使用されるグローバルのLocaleデータを登録する時に使う。
registerLocaleData(localeja);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    //ルートモジュールに IonicStorageModule をインポート
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {provide: LOCALE_ID, useValue: navigator.language},
    EventProvider,
    BookmarkProvider
  ]
})
export class AppModule {}
