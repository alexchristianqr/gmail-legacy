import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { Router } from '@angular/router'

@Component({
  selector: 'page-modal-mail',
  templateUrl: 'modal-settings-list-inbox.html',
})
export class ModalSettingsListInbox {
  myDatabase : string = 'DATABASE_INBOX'
  public MYSHAREDPREFERENCES: any = {}

  constructor(private httpService: HttpServiceProvider, private storage: Storage, private router: Router) {
    this.httpService.loadPreferences(this.myDatabase)
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
