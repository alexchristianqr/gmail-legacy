import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {NotificationServiceProvider} from '../providers/notification-service/notification-service';
import {HttpServiceProvider} from '../providers/http-service/http-service';
import {DialogServiceProvider} from '../providers/dialog-service/dialog-service';
import {IonicStorageModule} from "@ionic/storage";

import {MyApp} from './app.component';
import {DetailPage} from '../pages/detail/detail';
import {SearchPage} from "../pages/search/search";
import {CreatePage} from "../pages/create/create";
import {PopoverCreatePage} from "../pages/create/popover-create";
import {PopoverDetailPage} from "../pages/detail/popover-detail";
import {ModalCreatePage} from "../pages/create/modal-create";
import {ModalDetailPage} from "../pages/detail/modal-detail";
import {PopoverMailPage} from "../pages/mail/popover-mail";
import {ModalMailPage} from "../pages/mail/modal-mail";
import {MailsInboxPage} from "../pages/mails-inbox/mails-inbox";
import {MailsSentPage} from "../pages/mails-sent/mails-sent";

@NgModule({
    declarations: [
        MyApp,
        DetailPage,
        SearchPage,
        CreatePage,
        MailsSentPage,
        MailsInboxPage,
        PopoverCreatePage,
        PopoverMailPage,
        PopoverDetailPage,
        ModalCreatePage,
        ModalDetailPage,
        ModalMailPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        IonicStorageModule.forRoot({
            name: '__mydb',
            driverOrder: ['indexeddb', 'sqlite', 'websql']
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        DetailPage,
        SearchPage,
        CreatePage,
        MailsSentPage,
        MailsInboxPage,
        PopoverCreatePage,
        PopoverDetailPage,
        PopoverMailPage,
        ModalCreatePage,
        ModalDetailPage,
        ModalMailPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        HttpServiceProvider,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        NotificationServiceProvider,
        DialogServiceProvider,
    ]
})
export class AppModule {}
