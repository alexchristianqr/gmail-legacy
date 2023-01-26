import { Injectable } from '@angular/core'
import { ToastController } from 'ionic-angular'

@Injectable()
export class NotificationServiceProvider {
  public toast: any

  constructor(public toastCtrl: ToastController) {
    // not implement
  }

  public notifyInfo(message: string, duration: number = 3000, showButton: boolean = true): void {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'bottom',
      showCloseButton: showButton,
      closeButtonText: 'close',
    })
    this.toast.present()
  }

  public notifyError(message: string): void {
    this.toast = this.toastCtrl.create({
      message: message,
      duration: 0,
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: 'close',
    })
    this.toast.present()
  }
}
