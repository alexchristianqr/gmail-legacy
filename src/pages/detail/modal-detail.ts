/**
 * Created by aquispe on 28/11/2017.
 */
import { Component } from '@angular/core'
import { Events, ViewController } from 'ionic-angular'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../providers/http-service/http-service'

@Component({
  selector: 'page-modal-detail',
  templateUrl: 'modal-detail.html',
})
export class ModalDetailPage {

  public MYSHAREDPREFERENCES: any = {}

  constructor (
      public event: Events,
      public storage: Storage,
      public httpService: HttpServiceProvider,
      public viewCtrl: ViewController) {

    this.httpService.loadPreferences(this)

  }

  back () {
    this.viewCtrl.dismiss()
  }

  fnFetchMyPreferences () {
    if (Object.keys(this.MYSHAREDPREFERENCES).length) {
      this.storage.set('SHARED_PREFERENCE', this.MYSHAREDPREFERENCES).
          then(() => {
            this.event.publish('eventDetailFetch')
            console.log('Fetch shared preferences!')
          }).
          catch((error) => {
            console.error(error)
          })
    }
  }

}