import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { Router } from '@angular/router'
import { SHARED_PREFERENCES } from '../../../shared-preferences'
import { MyPreferences } from '../../../core/types/MyPreferences'

@Component({
  selector: 'page-modal-mail',
  templateUrl: 'modal-settings-list-inbox.html',
})
export class ModalSettingsListInbox {
  myDatabase: string = 'DATABASE_INBOX'
  mySharedPreferences: string = 'SHARED_PREFERENCES'
  MY_SHARED_PREFERENCES: MyPreferences = SHARED_PREFERENCES

  constructor(private httpService: HttpServiceProvider, private storage: Storage, private router: Router) {
    console.log('[ModalSettingsListInbox.constructor]')
    this.httpService.loadPreferences(this.myDatabase)
  }

  async back() {
    console.log('[ModalSettingsListInbox.back]')
    await this.router.navigate(['inbox'])
  }

  async updateMyPreferences() {
    console.log('[ModalSettingsListInbox.updateMyPreferences]')
    if (Object.keys(this.MY_SHARED_PREFERENCES).length < 1) return
    // await this.httpService.setStorage(this.mySharedPreferences, this.MY_SHARED_PREFERENCES)
    await this.httpService.setStorage(this.mySharedPreferences, this.MY_SHARED_PREFERENCES)
  }
}
