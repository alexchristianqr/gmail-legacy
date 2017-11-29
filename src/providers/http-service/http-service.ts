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
                    self.MYSHAREDPREFERENCES = data;
                    console.log(data);
                    console.log("Loaded shared preferences cache!");
                } else {
                    self.storage.set("SHARED_PREFERENCE", SHARED_PREFERENCE)
                        .then((data) => {
                            self.MYSHAREDPREFERENCES = data;
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

    send(self: any) {
        // Get storage
        self.storage.get("DATABASE_SENT")
            .then((data) => {
                data = (data == null) ? [] : data;
                data.unshift(self.params);
                // Set storage
                self.storage.set("DATABASE_SENT", data)
                    .then((data) => {
                        self.event.publish("eventMailsSentFetch", data);
                        self.navCtrl.pop();
                        self.notificationService.toast.dismiss();
                        self.notificationService.notifyInfo("Message sent successfully");
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
                self.notificationService.notifyError("Error, Message not sent");
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
                                    self.navCtrl.pop();
                                } else if (database === "DATABASE_INBOX") {//bandeja de entrada
                                } else if (database === "DATABASE_OUTBOX") {//bandeja de salida
                                } else if (database === "DATABASE_DRAFTS") {//borradores
                                }
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

    read(objeto: any): void {

    }

    toAttach(): void {

    }


}
