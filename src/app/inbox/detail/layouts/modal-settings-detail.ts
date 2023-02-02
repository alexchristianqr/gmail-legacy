import { Component } from '@angular/core'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { Router } from '@angular/router'
import { MyPreferences } from '../../../core/types/MyPreferences'
import { SHARED_PREFERENCES } from '../../../shared-preferences'

@Component({
  selector: 'page-modal-detail',
  templateUrl: 'modal-settings-detail.html',
})
export class ModalSettingsDetail {
  mySharedPreferences: string = 'SHARED_PREFERENCES'
  MY_SHARED_PREFERENCES: MyPreferences = SHARED_PREFERENCES

  constructor(private httpService: HttpServiceProvider, private router: Router) {
    console.log('[ModalSettingsDetail.constructor]')
  }

  async back() {
    console.log('[ModalSettingsDetail.back]')
    await this.router.navigate(['inbox-detail'])
  }

  async updateMyPreferences() {
    console.log('[ModalSettingsDetail.updateMyPreferences]')
    await this.httpService.setRemoveStorage(this.mySharedPreferences, this.MY_SHARED_PREFERENCES)
  }
}
