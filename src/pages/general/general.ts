import {Component} from '@angular/core';
import {Events, NavController, NavParams, ViewController} from 'ionic-angular';
import {DialogServiceProvider} from "../../providers/dialog-service/dialog-service";
import {Storage} from "@ionic/storage";
import {NotificationServiceProvider} from "../../providers/notification-service/notification-service";
import {HttpServiceProvider} from "../../providers/http-service/http-service";

@Component({
    selector: 'page-general',
    templateUrl: 'general.html'
})
export class GeneralPage {

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController,
                public httpService: HttpServiceProvider,
                public dialogService: DialogServiceProvider,
                public storage: Storage,
                public notificationService: NotificationServiceProvider,
                public navParams: NavParams) {
        console.log("GeneralPage!");
    }

    fnOpenDialog()
    {
        this.dialogService.dialogQuestion("", "Do you want reset the app", () => {
            this.notificationService.notifyInfo("Reset project...",0);
            this.storage.clear();
            this.httpService.loadPreferences(this);
            this.notificationService.toast.dismiss();
            this.notificationService.notifyInfo("Reset project successfully");
            console.log("Reset project!");
        });
    }

}
