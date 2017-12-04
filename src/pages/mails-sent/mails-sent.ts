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
import {SHARED_PREFERENCE} from "../../app/shared-preference";

@Component({
    selector: 'page-mails-sent',
    templateUrl: 'mails-sent.html'
})
export class MailsSentPage implements OnDestroy {

    ngOnDestroy(): void {
        this.event.unsubscribe("eventMailsSentFetch");
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

        this.event.subscribe("eventMailsSentFetch", () => {
            this.fnFetch();
        });

        this.event.subscribe("eventMailsSentPreferences", () => {
            this.httpService.loadPreferences(this);
        });

    }

    fnViewDetail(data, index) {
        this.navCtrl.push(DetailPage, {data: data, index: index});
    }

    fnViewSearch() {
        (this.modalCtrl.create(SearchPage,{database:SHARED_PREFERENCE.DB.DS})).present();
    }

    fnViewCreate() {
        (this.modalCtrl.create(CreatePage,{database:SHARED_PREFERENCE.DB.DS})).present();
    }

    fnFetch() {
        this.dialogService.showLoading();
        this.storage.get("DATABASE_SENT")
            .then((data) => {
                this.database = (data == null) ? [] : data;
                this.httpService.loadPreferences(this);
                this.dialogService.closeLoading();
                console.log("Fetch storage from Mails Sent!");
            })
            .catch((error) => {
                console.error(error);
                this.dialogService.closeLoading();
            });
    }

    fnClean() {
        this.dialogService.dialogQuestion("Warning", "Do you want to clean the database SENT?", () => {
            this.storage.remove("DATABASE_SENT").then(() => {
                console.log("DATABASE_SENT removido!");
                this.fnFetch();
                this.notificationService.notifyInfo("Database cleaned");
                console.log("Storage cleaned!");
            });
        });
    }

    presentPopover(myEvent) {
        (this.popoverCtrl.create(PopoverMailPage)).present({ev: myEvent});
    }

    fnUnRead() {
        console.log("unread!");
    }

}
