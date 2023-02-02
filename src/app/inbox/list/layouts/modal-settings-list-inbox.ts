import { Component } from '@angular/core'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { Router } from '@angular/router'
import { SHARED_PREFERENCES } from '../../../shared-preferences'
import { MyPreferences } from '../../../core/types/MyPreferences'

@Component({
  selector: 'page-modal-mail',
  templateUrl: 'modal-settings-list-inbox.html',
})
export class ModalSettingsListInbox {
  mySharedPreferences: string = 'SHARED_PREFERENCES'
  MY_SHARED_PREFERENCES: MyPreferences = SHARED_PREFERENCES

  constructor(private httpService: HttpServiceProvider, private router: Router) {
    console.log('[ModalSettingsListInbox.constructor]')
  }

  async back() {
    console.log('[ModalSettingsListInbox.back]')
    await this.router.navigate(['inbox'])
  }

  async updateMyPreferences() {
    console.log('[ModalSettingsListInbox.updateMyPreferences]')
    await this.httpService.setRemoveStorage(this.mySharedPreferences, this.MY_SHARED_PREFERENCES)
  }
}
