import { Injectable } from '@angular/core'
import { AlertController, AlertOptions, LoadingController } from 'ionic-angular'

@Injectable()
export class DialogServiceProvider {
  public loading: any

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    // not implemented
  }

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

  public dialogQuestion(title: string = 'Alert', message: string, btnOk: Function, btnCancel?: Function): void {
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
    alert.present()
  }

  public showLoading(content: string = 'Loading Please Wait...') {
    this.loading = this.loadingCtrl.create({
      content: content,
    })
    this.loading.present()
  }

  public closeLoading() {
    this.loading.dismiss()
  }
}
