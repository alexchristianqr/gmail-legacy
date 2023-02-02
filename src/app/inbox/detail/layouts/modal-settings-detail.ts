import { Component, OnInit } from '@angular/core'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { Router } from '@angular/router'
import { MyPreferences } from '../../../core/types/MyPreferences'
import { resize } from 'ionicons/icons'

@Component({
  selector: 'page-modal-detail',
  templateUrl: 'modal-settings-detail.html',
})
export class ModalSettingsDetail implements OnInit {
  myDatabase: string = 'DATABASE_INBOX'
  mySharedPreferences: string = 'SHARED_PREFERENCES'
  public MYSHAREDPREFERENCES: MyPreferences
  mivalor = false

  constructor(private storage: Storage, private httpService: HttpServiceProvider, private router: Router) {
    this.MYSHAREDPREFERENCES = this.httpService.initSharedPreferences
    // this.httpService.loadPreferences(this.myDatabase)
    this.httpService.loadPreferences(this.mySharedPreferences, this)
    // this.httpService.getStorage(this.mySharedPreferences).then((res) => {
    //   this.MYSHAREDPREFERENCES = res
    // })
  }

  ngOnInit(): void {
    this.httpService.loadPreferences(this.mySharedPreferences, this)
    this.httpService.loadPreferences(this.myDatabase, this)
    this.httpService.getStorage(this.mySharedPreferences).then((res) => {
      this.MYSHAREDPREFERENCES = res
    })
  }

  async back() {
    await this.router.navigate(['inbox-detail'])
  }

  async updateMyPreferences() {
    return this.httpService.setStorage(this.mySharedPreferences, this.MYSHAREDPREFERENCES).then((res) => {
      console.log('Shared preferences actualizado!')
      this.httpService.loadPreferences(this.mySharedPreferences, { self: this })
    })
  }
}
