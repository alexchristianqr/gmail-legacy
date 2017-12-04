import {Component} from '@angular/core';
import {Events, NavController, NavParams, PopoverController, ViewController} from 'ionic-angular';
import {NotificationServiceProvider} from "../../providers/notification-service/notification-service";
import {HttpServiceProvider} from "../../providers/http-service/http-service";
import {PopoverDetailPage} from "./popover-detail";
import {Storage} from "@ionic/storage";
import {DialogServiceProvider} from "../../providers/dialog-service/dialog-service";
import * as moment from "moment";

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})
export class DetailPage {

    index: any;
    data: any = {};
    newdate :any;
    public MYSHAREDPREFERENCES: any = {};

    constructor(public popoverCtrl: PopoverController,
                public httpService: HttpServiceProvider,
                public notificationService: NotificationServiceProvider,
                public event: Events,
                public dialogService: DialogServiceProvider,
                public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public storage: Storage) {

        this.httpService.loadPreferences(this);
        this.data = this.navParams.data.data;
        this.index = this.navParams.data.index;
        this.newdate = moment(this.data.created_at).format("ll");
        this.update(this.navParams.data.data, this.navParams.data.index);

        this.event.subscribe("eventDetailFetch", () => {
            this.httpService.loadPreferences(this);
        })

    }

    back(): void {
        this.viewCtrl.dismiss();
    }

    fnRemove() {
        let self = this;
        this.storage.get("SHARED_PREFERENCE").then((data) => {
            function doFunc() {
                self.notificationService.notifyInfo("Removing...", 0);
                self.httpService.remove(self, self.data.database);
            }

            if (data != null) {
                if (data.CONFIRM_BEFORE_REMOVING) {
                    this.dialogService.dialogQuestion("", "Do you want to remove this mail?", () => {
                        doFunc();
                    });
                } else {
                    doFunc();
                }
            } else {
                doFunc();
            }
        }).catch((error) => {
            console.error(error);
        })
    }

    presentPopover(myEvent): void {
        (this.popoverCtrl.create(PopoverDetailPage)).present({ev: myEvent});
    }

    update(objeto, index, bool = null) {
        objeto.is_read = (bool != null) ? bool : true;
        this.storage.get(objeto.database)
            .then((data) => {
                if (data != null) {
                    data.forEach((value, key) => {
                        if (key == index) {
                            data[key] = objeto;
                        }
                    });
                    this.storage.set(objeto.database, data)
                        .then(() => {
                            console.log("Object of database storage updated!")
                        })
                        .catch((error) => {
                            console.error(error);
                        })
                }
            })
            .catch((error) => {
                console.error(error);
            })
    }

    fnUnRead() {
        this.notificationService.notifyInfo("Changing...", 0);
        this.update(this.data, this.index, false);
        this.navCtrl.pop();
        this.notificationService.toast.dismiss();
        this.notificationService.notifyInfo("Changed mail to unread");
    }

}