import {Component, ViewChild} from '@angular/core';
import {Events, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Storage} from "@ionic/storage";
import {HttpServiceProvider} from "../providers/http-service/http-service";
import {MailsInboxPage} from "../pages/mails-inbox/mails-inbox";
import {MailsSentPage} from "../pages/mails-sent/mails-sent";
import {GeneralPage} from "../pages/general/general";
import {HomePage} from "../pages/home/home";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    @ViewChild(Nav)
    nav: Nav;
    database: any = [];
    rootPage: any = MailsInboxPage;
    activePage: any;
    public MYSHAREDPREFERENCES: any = {};
    listComponents: Array<{ title: string, icon: string, component: any, db: any, status: boolean }>;

    constructor(private platform: Platform,
                private  statusBar: StatusBar,
                private splashScreen: SplashScreen,
                public httpService: HttpServiceProvider,
                public event: Events,
                public storage: Storage) {

        platform.ready().then(() => {
            if (this.platform.is('android')) {
                // let status bar overlay webview
                this.statusBar.overlaysWebView(false);
                // set status bar to white
                this.statusBar.backgroundColorByName('red');
            } else {
                // statusBar.backgroundColorByHexString("#f44336");//change this to your color
                // Okay, so the platform is ready and our plugins are available.
                // Here you can do any higher level native things you might need.
                statusBar.styleDefault();
            }
            this.splashScreen.hide();
        });

        this.listComponents = [
            {title: "Inbox", icon: "fa-list-ul", component: MailsInboxPage, db: "DATABASE_INBOX", status: false},
            {title: "Mail Sent", icon: "fa-send", component: MailsSentPage, db: "DATABASE_SENT", status: false},
            {title: "Mail Received", icon: "fa-envelope", component: HomePage, db: "DATABASE_RECEIVED", status: false},
            {title: "Mail Saved", icon: "fa-envelope-open", component: HomePage, db: "DATABASE_SAVED", status: false},
            {title: "Mail Span", icon: "fa-trash", component: HomePage, db: "DATABASE_SPAN", status: false},
            {title: "General", icon: "fa-user-secret", component: GeneralPage, db: "", status: false},
        ];

        this.httpService.loadPreferences(this);
        this.activePage = this.listComponents[0];
    }

    fnLoadRoot(objeto) {
        this.nav.setRoot(objeto.component, {database: objeto.db});
        this.activePage = objeto;
    }

    fnCheckActive(page) {
        page.status = false;
        if (page == this.activePage) {
            return page.status = true;
        }
    }

}

