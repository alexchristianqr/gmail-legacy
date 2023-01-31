import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { SHARED_PREFERENCE } from '../../shared-preference'
import { Router } from '@angular/router'

@Component({
  selector: 'page-modal-create',
  templateUrl: 'modal-settings-create.html',
})
export class ModalSettingsCreate {
  public MYSHAREDPREFERENCES: object = {
    CONFIRM_BEFORE_SENDING: false,
    CONFIRM_BEFORE_REMOVING: false,
    CONFIRM_BEFORE_FILING: false,
  }

  constructor(private storage: Storage, private router: Router) {
    this.storage
      .get('SHARED_PREFERENCE')
      .then((data) => {
        if (data != null) {
          this.MYSHAREDPREFERENCES = data
        } else {
          this.storage
            .set('SHARED_PREFERENCE', SHARED_PREFERENCE)
            .then((data) => {
              this.MYSHAREDPREFERENCES = data
              console.log('Loaded shared preferences by default!')
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  async back() {
    await this.router.navigate(['create'])
  }

  fnFetchMyPreferences() {
    if (Object.keys(this.MYSHAREDPREFERENCES).length) {
      this.storage
        .set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES)
        .then((data) => {
          console.log(data)
          console.log('Fetch shared preferences!')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
