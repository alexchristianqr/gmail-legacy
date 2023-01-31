import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'

@Component({
  selector: 'page-modal-mail',
  templateUrl: './modal-settings-list-inbox.html',
})
export class ModalMailPage {
  public MYSHAREDPREFERENCES: any = {}

  constructor(public httpService: HttpServiceProvider, public storage: Storage) {
    this.httpService.loadPreferences(this)
  }

  async back() {
    // return this.viewCtrl.dismiss()
  }

  fnFetchMyPreferences() {
    if (Object.keys(this.MYSHAREDPREFERENCES).length) {
      this.storage
        .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
        .then(() => {
          // this.event.publish('eventMailsInboxPreferences')
          // this.event.publish('eventMailsSentPreferences')
          console.log('Fetch shared preferences!')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
