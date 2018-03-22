import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ConsulePage } from '../pages/consule/consule';
import { ContactPage } from '../pages/contact/contact';
import { AmbassadePage } from '../pages/ambassade/ambassade';
import { TabsPage } from '../pages/tabs/tabs';


import {IonicStorageModule} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    ConsulePage,
    ContactPage,
    AmbassadePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ConsulePage,
    ContactPage,
    AmbassadePage,
    TabsPage
  ],
  providers: [
       {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
