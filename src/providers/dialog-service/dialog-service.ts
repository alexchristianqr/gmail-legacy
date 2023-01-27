import { Injectable } from '@angular/core'
import { AlertController, AlertOptions, LoadingController } from 'ionic-angular'

@Injectable()
export class DialogServiceProvider {
  public loading: any

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) {}

  public async dialogNotification(message: string, btnOut?: Function) {
    let alert = this.alertCtrl.create({
      title: 'Warning',
      message: message,
      buttons: [
        {
          text: 'Ok',
          role: 'cancel',
          handler: typeof btnOut === 'function' ? btnOut : () => {},
        },
      ],
    } as AlertOptions)
    return alert.present()
  }

  public async dialogQuestion(title: string = 'Alert', message: string, btnOk: Function, btnCancel?: Function) {
    let alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        {
          text: 'Ok',
          handler: typeof btnOk === 'function' ? btnOk : () => {},
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: typeof btnCancel === 'function' ? btnCancel : () => {},
        },
      ],
    } as AlertOptions)
    return alert.present()
  }

  public async showLoading(content: string = 'Loading Please Wait...') {
    this.loading = this.loadingCtrl.create({
      content: content,
    })
    return this.loading.present()
  }

  public async closeLoading() {
    return this.loading.dismiss()
  }
}
