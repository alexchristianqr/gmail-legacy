import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { Router } from '@angular/router'

@Component({
  selector: 'page-modal-mail',
  templateUrl: 'modal-settings-list-inbox.html',
})
export class ModalSettingsListInbox {
  public MYSHAREDPREFERENCES: any = {}

  constructor(public httpService: HttpServiceProvider, public storage: Storage, public router: Router) {
    this.httpService.loadPreferences(this)
  }

  async back() {
    await this.router.navigate(['inbox'])
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
