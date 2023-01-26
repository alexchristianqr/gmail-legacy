/**
 * Created by aquispe on 26/11/2017.
 */
import { Component } from '@angular/core'
import { Events, ViewController } from 'ionic-angular'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../providers/http-service/http-service'

@Component({
  selector: 'page-modal-mail',
  templateUrl: 'modal-mail.html',
})
export class ModalMailPage {
  public MYSHAREDPREFERENCES: any = {}

  constructor(public event: Events, public httpService: HttpServiceProvider, public viewCtrl: ViewController, public storage: Storage) {
    this.httpService.loadPreferences(this)
  }

  async back() {
    return this.viewCtrl.dismiss()
  }

  fnFetchMyPreferences() {
    if (Object.keys(this.MYSHAREDPREFERENCES).length) {
      this.storage
        .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
        .then(() => {
          this.event.publish('eventMailsInboxPreferences')
          this.event.publish('eventMailsSentPreferences')
          console.log('Fetch shared preferences!')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
