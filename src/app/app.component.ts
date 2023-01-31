import { Component, ViewChild } from '@angular/core'
import { MailsInboxPage } from './mails-inbox/mails-inbox'
import { Platform } from '@ionic/angular'
import { MailsSentPage } from './mails-sent/mails-sent'
import { HomePage } from './home/home'
import { GeneralPage } from './general/general'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public appPages = [
  //   { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
  //   { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
  //   { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
  //   { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
  //   { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
  //   { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  // ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  // constructor() {}

  // @ViewChild(NavController) nav: NavController

  // rootPage: any = MailsInboxPage
  pagesSection1: Array<{ title: string; component: any; icon: string; status: boolean; path: string }>
  pagesSection2: Array<{ title: string; component: any; icon: string; status: boolean; path: string }>
  pagesSection3: Array<{ title: string; component: any; icon: string; status: boolean; path: string }>

  constructor(public platform: Platform) {
    this.initializeApp()
    this.pagesSection1 = [
      {
        title: 'Inbox',
        icon: 'mail',
        component: MailsInboxPage,
        // db: 'DATABASE_INBOX',
        status: false,
        path: 'inbox',
      },
    ]
    this.pagesSection2 = [
      {
        title: 'Social',
        icon: 'people',
        component: MailsSentPage,
        // db: 'DATABASE_SENT',
        status: false,
        path: 'inbox',
      },
      {
        title: 'Promotions',
        icon: 'pricetag',
        component: HomePage,
        // db: 'DATABASE_RECEIVED',
        status: false,
        path: 'inbox',
      },
      {
        title: 'Mail Saved',
        icon: 'cloud',
        component: HomePage,
        // db: 'DATABASE_SAVED',
        status: false,
        path: 'inbox',
      },
      {
        title: 'Mail Span',
        icon: 'bug',
        component: HomePage,
        // db: 'DATABASE_SPAN',
        status: false,
        path: 'inbox',
      },
    ]
    this.pagesSection3 = [
      {
        title: 'Settings',
        icon: 'cog',
        component: GeneralPage,

        status: false,
        path: 'inbox',
      },
      {
        title: 'Logout',
        icon: 'log-out',
        component: GeneralPage,
        status: false,
        path: 'inbox',
      },
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault()
      // this.splashScreen.hide()
    })
  }

  async openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // return this.nav.setRoot(page.component)
  }
}
