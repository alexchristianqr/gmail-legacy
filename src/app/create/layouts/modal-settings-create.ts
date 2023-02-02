import { Component } from '@angular/core'
import { SHARED_PREFERENCES } from '../../shared-preferences'
import { Router } from '@angular/router'
import { MyPreferences } from '../../core/types/MyPreferences'
import { HttpServiceProvider } from '../../../providers/http-service/http-service'

@Component({
  selector: 'page-modal-create',
  templateUrl: 'modal-settings-create.html',
})
export class ModalSettingsCreate {
  mySharedPreferences: string = 'SHARED_PREFERENCES'
  MY_SHARED_PREFERENCES: MyPreferences = SHARED_PREFERENCES

  constructor(private httpService: HttpServiceProvider, private router: Router) {
    console.log('[ModalSettingsCreate.constructor]')
  }

  async back() {
    console.log('[ModalSettingsCreate.back]')
    await this.router.navigate(['create'])
  }

  async updateMyPreferences() {
    console.log('[ModalSettingsCreate.updateMyPreferences]')
    await this.httpService.setRemoveStorage(this.mySharedPreferences, this.MY_SHARED_PREFERENCES)
  }
}
