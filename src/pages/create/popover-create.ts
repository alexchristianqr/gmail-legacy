import {Component} from "@angular/core";
import {ModalController, ViewController} from "ionic-angular";
import {ModalCreatePage} from "./modal-create";

@Component({
    selector: 'page-popover-create',
    templateUrl: 'popover-create.html'
})

export class PopoverCreatePage {

    list: Array<{ title: string, component: any }>;

    constructor(public viewCtrl: ViewController,public modalCtrl:ModalController) {
        this.list = [
            {title: "Add Contacts", component: ModalCreatePage},
            {title: "Discard", component: ModalCreatePage},
            {title: "Settings", component: ModalCreatePage},
            {title: "Help", component: ModalCreatePage},
        ];
    }

    open(objeto) {
        this.viewCtrl.dismiss();
        (this.modalCtrl.create(objeto.component)).present();
    }

}