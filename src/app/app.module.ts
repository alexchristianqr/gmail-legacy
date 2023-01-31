import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { IonicStorageModule } from '@ionic/storage-angular'

import { DetailPage } from './detail/detail'
import { SearchPage } from './search/search'
import { CreatePage } from './create/create'
import { MailsSentPage } from './mails-sent/mails-sent'
import { ModalMailPage } from './mail/modal-mail'
import { HomePage } from './home/home'
import { ModalDetailPage } from './detail/modal-detail'
import { PopoverMailPage } from './mail/popover-mail'
import { ModalCreatePage } from './create/modal-create'
import { MailsInboxPage } from './mails-inbox/mails-inbox'
import { PopoverCreatePage } from './create/popover-create'
import { GeneralPage } from './general/general'
import { PopoverDetailPage } from './detail/popover-detail'

@NgModule({
  declarations: [
    AppComponent,
    DetailPage,
    SearchPage,
    CreatePage,
    MailsSentPage,
    MailsInboxPage,
    GeneralPage,
    HomePage,
    PopoverCreatePage,
    PopoverMailPage,
    PopoverDetailPage,
    ModalCreatePage,
    ModalDetailPage,
    ModalMailPage,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot()],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
