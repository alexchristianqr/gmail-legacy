import {Component} from '@angular/core';
import {Events, NavController, NavParams, PopoverController, ViewController} from 'ionic-angular';
import {NotificationServiceProvider} from "../../providers/notification-service/notification-service";
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {PopoverDetailPage} from "./popover-detail";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})
export class DetailPage {

    item: any;
    index: any;
    data: any;
    MYSHAREDPREFERENCES: any = {};
    self = this;

    constructor(public popoverCtrl: PopoverController,
                public httpService: HttpServiceProvider,
                public notificationService: NotificationServiceProvider,
                public event: Events,
                public navCtrl:NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public storage : Storage) {

        this.httpService.loadPreferences(this);
        this.item = this.navParams.data.data;
        this.index = this.navParams.data.index;

        this.event.subscribe("eventDetailFetch", () => {
            this.httpService.loadPreferences(this);
        })
    }

    back(): void {
        this.viewCtrl.dismiss();
    }

    fnRemove() {
        this.notificationService.notifyInfo("Removing...", 0);
        this.httpService.remove(this, "DATABASE_SENT");
    }

    presentPopover(myEvent):void {
        (this.popoverCtrl.create(PopoverDetailPage)).present({ev: myEvent});
    }

}
