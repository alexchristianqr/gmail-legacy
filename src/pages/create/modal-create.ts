/**
 * Created by aquispe on 25/11/2017.
 */
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { SHARED_PREFERENCE } from '../../app/shared-preference';

@Component({
  selector: 'page-modal-create',
  templateUrl: 'modal-create.html',
})
export class ModalCreatePage {
  public MYSHAREDPREFERENCES: object = {
    CONFIRM_BEFORE_SENDING: false,
    CONFIRM_BEFORE_REMOVING: false,
    CONFIRM_BEFORE_FILING: false,
  };

  constructor(public viewCtrl: ViewController, public storage: Storage) {
    this.storage
      .get('SHARED_PREFERENCE')
      .then((data) => {
        if (data != null) {
          this.MYSHAREDPREFERENCES = data;
        } else {
          this.storage
            .set('SHARED_PREFERENCE', SHARED_PREFERENCE)
            .then((data) => {
              this.MYSHAREDPREFERENCES = data;
              console.log('Loaded shared preferences by default!');
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  back() {
    this.viewCtrl.dismiss();
  }

  fnFetchMyPreferences() {
    if (Object.keys(this.MYSHAREDPREFERENCES).length) {
      this.storage
        .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
        .then((data) => {
          console.log(data);
          console.log('Fetch shared preferences!');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
