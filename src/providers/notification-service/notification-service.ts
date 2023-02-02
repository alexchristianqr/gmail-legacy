import { Injectable } from '@angular/core'
import { ToastController } from '@ionic/angular'

@Injectable({
  providedIn: 'root',
})
export class NotificationServiceProvider {
  public toast: any
  handlerMessage = ''
  roleMessage = ''

  constructor(private toastCtrl: ToastController) {
    console.log('[NotificationServiceProvider.constructor]')
    // not implement
  }

  public notifyInfo(message: string, duration: number = 3000, showButton: boolean = true): void {
    console.log('[NotificationServiceProvider.notifyInfo]', { message })
    this.toastCtrl
      .create({
        message: message,
        duration: duration,
        // position: 'bottom',
        buttons: [
          {
            text: 'More Info',
            role: 'info',
            handler: () => {
              this.handlerMessage = 'More Info clicked'
            },
          },
          {
            text: 'Dismiss',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Dismiss clicked'
            },
          },
        ],
      })
      .then(async (toast) => {
        toast.present
        const { role } = await toast.onDidDismiss()
        this.roleMessage = `Dismissed with role: ${role}`
      })
  }

  public notifyError(message: string): void {
    console.log('[NotificationServiceProvider.notifyError]')
    this.toastCtrl
      .create({
        message: message,
        duration: 0,
        // position: 'bottom',
        buttons: [
          {
            text: 'More Info',
            role: 'info',
            handler: () => {
              this.handlerMessage = 'More Info clicked'
            },
          },
          {
            text: 'Dismiss',
            role: 'cancel',
            handler: () => {
              this.handlerMessage = 'Dismiss clicked'
            },
          },
        ],
      })
      .then((res) => res.present)
  }
}
