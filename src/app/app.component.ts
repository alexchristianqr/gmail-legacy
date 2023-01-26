import { Component, ViewChild } from '@angular/core'
import { Nav, Platform } from 'ionic-angular'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'

// import { HttpServiceProvider } from '../providers/http-service/http-service'
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

  pages: Array<{ title: string; component: any; icon: string; status: boolean }>
  pagesSecondary: Array<{ title: string; component: any; icon: string; status: boolean }>

  constructor(
    // public httpService: HttpServiceProvider,
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen
  ) {
    this.initializeApp()

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },

      {
        title: 'Inbox',
        icon: 'home',
        component: MailsInboxPage,
        // db: 'DATABASE_INBOX',
        status: false,
      },
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
    ]
    this.pagesSecondary = [
      {
        title: 'Mail Saved',
        icon: 'cloud',
        component: HomePage,
        // db: 'DATABASE_SAVED',
        status: false,
      },
      {
        title: 'Mail Span',
        icon: 'alert',
        component: HomePage,
        // db: 'DATABASE_SPAN',
        status: false,
      },
      {
        title: 'General',
        icon: 'cog',
        component: GeneralPage,
        // db: '',
        status: false,
      },
      {
        title: 'Downloads',
        icon: 'cloud-download',
        component: GeneralPage,
        // db: '',
        status: false,
      },
      {
        title: 'Ayuda',
        icon: 'hand',
        component: GeneralPage,
        // db: '',
        status: false,
      },
    ]

    // this.httpService.loadPreferences(this)
    // this.activePage = this.listComponents[0]
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
