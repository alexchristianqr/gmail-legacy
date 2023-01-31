import { Injectable } from '@angular/core'
import { AlertController, AlertOptions, LoadingController } from '@ionic/angular'

@Injectable({
  providedIn: 'root',
})
export class DialogServiceProvider {
  public loading: any

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

  public dialogNotification(message: string, btnOut?: Function) {
    return this.alertCtrl.create({
      header: 'Warning',
      message: message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => (typeof btnOut === 'function' ? btnOut : () => {}),
        },
      ],
    })
  }

  public async dialogQuestion(title: string = 'Alert', message: string, btnOk: Function, btnCancel?: Function) {
    return this.alertCtrl.create({
      header: 'Warning',
      message: message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => (typeof btnOk === 'function' ? btnOk : () => {}),
        },
        {
          text: 'Ok',
          role: 'cancel',
          handler: () => (typeof btnCancel === 'function' ? btnCancel : () => {}),
        },
      ],
    })
  }

  public showLoading(content: string = 'Loading Please Wait...') {
    this.loading = this.loadingCtrl
    // this.loading = this.loadingCtrl.create({
    //   content: content,
    // })
    // return this.loading.present()
  }

  public async closeLoading() {
    // return this.loading.dismiss()
  }
}
