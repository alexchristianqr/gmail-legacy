import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { MailsInboxPage } from '../pages/mails-inbox/mails-inbox'
import { MailsSentPage } from '../pages/mails-sent/mails-sent'
import { GeneralPage } from '../pages/general/general'
import { HomePage } from '../pages/home/home'

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  @ViewChild(Nav) nav: Nav

  rootPage: any = MailsInboxPage
  pagesSection1: Array<{ title: string; component: any; icon: string; status: boolean }>
  pagesSection2: Array<{ title: string; component: any; icon: string; status: boolean }>
  pagesSection3: Array<{ title: string; component: any; icon: string; status: boolean }>

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp()
    this.pagesSection1 = [
      {
        title: 'Inbox',
        icon: 'mail',
        component: MailsInboxPage,
        // db: 'DATABASE_INBOX',
        status: false,
      },

    ]
    this.pagesSection2 = [
      {
        title: 'Social',
        icon: 'people',
        component: MailsSentPage,
        // db: 'DATABASE_SENT',
        status: false,
      },
      {
        title: 'Promotions',
        icon: 'pricetag',
        component: HomePage,
        // db: 'DATABASE_RECEIVED',
        status: false,
      },
      {
        title: 'Mail Saved',
        icon: 'cloud',
        component: HomePage,
        // db: 'DATABASE_SAVED',
        status: false,
      },
      {
        title: 'Mail Span',
        icon: 'bug',
        component: HomePage,
        // db: 'DATABASE_SPAN',
        status: false,
      },
    ]
    this.pagesSection3 = [
      {
        title: 'Settings',
        icon: 'cog',
        component: GeneralPage,
        status: false,
      },
      {
        title: 'Logout',
        icon: 'log-out',
        component: GeneralPage,
        status: false,
      },
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault()
      this.splashScreen.hide()
    })
  }

  async openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    return this.nav.setRoot(page.component)
  }
}
