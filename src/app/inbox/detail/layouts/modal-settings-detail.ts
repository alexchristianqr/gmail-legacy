import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { Router } from '@angular/router'

@Component({
  selector: 'page-modal-detail',
  templateUrl: 'modal-settings-detail.html',
})
export class ModalSettingsDetail {
  public MYSHAREDPREFERENCES: any = {}

  constructor(private storage: Storage, private httpService: HttpServiceProvider, private router: Router) {
    this.httpService.loadPreferences(this)
  }

  async back() {
    await this.router.navigate(['inbox-detail'])
  }

  // async fnFetchMyPreferences() {
  //   if (!Object.keys(this.MYSHAREDPREFERENCES).length) throw new Error('Not found shared prefernces')
  //
  //   return this.storage
  //     .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
  //     .then(() => {
  //       // this.event.publish('eventDetailFetch')
  //       console.log('Fetch shared preferences!')
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }
}
