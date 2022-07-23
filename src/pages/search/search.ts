import { Component } from '@angular/core';
import { Events, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { DetailPage } from '../detail/detail';
import { SHARED_PREFERENCE } from '../../app/shared-preference';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items: any = [];

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams, public event: Events, public viewCtrl: ViewController) {}

  back() {
    if (this.navParams.data.database === SHARED_PREFERENCE.DB.DI) {
      this.event.publish('eventMailsInboxFetch');
    } else if (this.navParams.data.database === SHARED_PREFERENCE.DB.DS) {
      this.event.publish('eventMailsSentFetch');
    }
    this.viewCtrl.dismiss();
  }

  fnViewDetail(data, index) {
    this.navCtrl.push(DetailPage, { data: data, index: index });
  }

  getItems(e: any) {
    let text = e.target.value;
    this.storage.set('text_search', e.target.value);

    this.items = [];
    this.storage
      .get(this.navParams.data.database)
      .then((data) => {
        if (data != null) {
          if (text.toLowerCase().length == 0) {
            return (this.items = []);
          } else {
            return (this.items = data.filter((objeto) => {
              if (
                objeto.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                objeto.subject.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
                objeto.message.toLowerCase().indexOf(text.toLowerCase()) > -1
              ) {
                return true;
              }
            }));
          }
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}
