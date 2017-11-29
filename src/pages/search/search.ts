import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    items: string[];

    constructor(public navCtrl: NavController,
                public viewCtrl: ViewController) {
        this.initializeItems();
    }

    back() {
        this.viewCtrl.dismiss();
    }

    initializeItems() {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Lima',
            'Santiago',
            'Cordova',
        ];
    }

    getItems(ev: any) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the searchbar
        let val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }

}
