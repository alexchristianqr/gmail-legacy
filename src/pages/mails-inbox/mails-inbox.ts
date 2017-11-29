import {Component, OnDestroy} from '@angular/core';
import {Events, ModalController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {CreatePage} from "../create/create";
import {SearchPage} from "../search/search";
import {DetailPage} from "../detail/detail";
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {NotificationServiceProvider} from "../../providers/notification-service/notification-service";
import {DialogServiceProvider} from "../../providers/dialog-service/dialog-service";
import {Storage} from "@ionic/storage";
import {PopoverMailPage} from "../mail/popover-mail";

@Component({
    selector: 'page-mails-inbox',
    templateUrl: 'mails-inbox.html'
})
export class MailsInboxPage implements OnDestroy {

    ngOnDestroy(): void {
        this.event.unsubscribe("eventMailsInboxFetch");
        console.log("Events destroyed!");
    }

    database: any = [];
    public MYSHAREDPREFERENCES: any = {};

    constructor(public popoverCtrl: PopoverController,
                public httpService: HttpServiceProvider,
                public notificationService: NotificationServiceProvider,
                public navCtrl: NavController,
                public event: Events,
                public modalCtrl: ModalController,
                public dialogService: DialogServiceProvider,
                public storage: Storage,
                public navParams: NavParams) {

        this.fnFetch();

        this.event.subscribe("eventMailsInboxFetch", () => {
            this.fnFetch();
        });

        this.event.subscribe("eventMailsInboxPreferences", () => {
            this.httpService.loadPreferences(this);
        });

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MailsInboxPage');
    }

    fnMailDetail(data, index) {
        this.navCtrl.push(DetailPage, {data: data, index: index});
    }

    fnMailSearch() {
        (this.modalCtrl.create(SearchPage)).present();
    }

    fnMailCreate() {
        (this.modalCtrl.create(CreatePage)).present();
    }

    fnFetch() {
        let theDB = (this.navParams.data.database != undefined) ? this.navParams.data.database : "DATABASE_SENT";
        this.dialogService.showLoading();
        this.storage.get(theDB)
            .then((data) => {
                this.database = (data == null) ? [] : data;
                this.httpService.loadPreferences(this);
                this.dialogService.closeLoading();
                console.log("Fetch storage from Mails Inbox!");
            })
            .catch((error) => {
                console.error(error);
                this.dialogService.closeLoading();
            });
    }

    fnClean() {
        let self = this;
        this.dialogService.dialogQuestion("Warning", "Do you want to clean the database?", () => {
            self.storage.clear();
            self.httpService.loadPreferences(self);
            self.fnFetch();
            self.notificationService.notifyInfo("Database cleaned");
            console.log("Storage cleaned!");
        });
    }

    presentPopover(myEvent) {
        (this.popoverCtrl.create(PopoverMailPage)).present({ev: myEvent});
    }

    fnUnRead() {
        console.log("unread!");
    }

}
