import {Injectable} from '@angular/core';
import {SHARED_PREFERENCE} from "../../app/shared-preference";

@Injectable()
export class HttpServiceProvider {

    constructor() {
        // not implement
    }

    loadPreferences(self: any) {
        self.storage.get("SHARED_PREFERENCE")
            .then((data) => {
                if (data != null) {
                    if(self.MYSHAREDPREFERENCES != undefined) self.MYSHAREDPREFERENCES = data;
                    console.log("Loaded shared preferences cache!");
                } else {
                    self.storage.set("SHARED_PREFERENCE", SHARED_PREFERENCE)
                        .then((data) => {
                            if(self.MYSHAREDPREFERENCES != undefined) self.MYSHAREDPREFERENCES = data;
                            console.log("Loaded shared preferences by default!");
                        })
                        .catch((error) => {
                            console.log(error);
                        })
                }
            }).catch((error) => {
            console.error(error);
        });
    }

    create(self: any) {
        // Get storage
        let msg = "";
        self.storage.get(self.params.database)
            .then((data) => {
                data = (data == null) ? [] : data;
                data.unshift(self.params);
                // Set storage
                self.storage.set(self.params.database, data)
                    .then((data) => {
                        if (self.params.database === SHARED_PREFERENCE.DB.DI) {
                            self.event.publish("eventMailsInboxFetch");
                            msg = "inbox";
                        } else if (self.params.database === SHARED_PREFERENCE.DB.DS) {
                            self.event.publish("eventMailsSentFetch");
                            msg = "sent";
                        }
                        self.navCtrl.pop();
                        self.notificationService.toast.dismiss();
                        self.notificationService.notifyInfo("Message " + msg + " successfully");
                    })
                    .catch((error) => {
                        console.error(error);
                        self.notificationService.toast.dismiss();
                        self.notificationService.notifyError("Error, Getting list of database");
                    })
            })
            .catch((error) => {
                console.error(error);
                self.notificationService.toast.dismiss();
                self.notificationService.notifyError("Error, Message not this process");
            });
    }

    remove(self: any, database: any): void {
        self.storage.get(database)
            .then((data) => {
                data.forEach((item, i) => {
                    if (self.index === i) {
                        data.splice(i, 1);
                        self.storage.set(database, data)
                            .then(() => {
                                if (database === "DATABASE_SENT") {//enviados
                                    self.event.publish("eventMailsSentFetch");
                                } else if (database === "DATABASE_INBOX") {//bandeja de entrada
                                    self.event.publish("eventMailsInboxFetch");
                                } else if (database === "DATABASE_OUTBOX") {//bandeja de salida
                                } else if (database === "DATABASE_DRAFTS") {//borradores
                                }
                                self.navCtrl.pop();
                            });
                        self.notificationService.toast.dismiss();
                        self.notificationService.notifyInfo("1 element removed successfully");
                    }
                })
            })
            .catch((error) => {
                console.error(error);
                self.notificationService.toast.dismiss();
                self.notificationService.notifyError("Error, element not removed");
            })
    }

    archive(objeto: any): void {

    }

    unread(objeto: any): void {

    }

    toAttach(): void {

    }

}
