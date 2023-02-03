import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AlertController, ToastController } from '@ionic/angular'
import { MyPopover } from '../../../core/types/MyPopover'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'
import { EventService } from '../../../core/services/events/event.service'

@Component({
  selector: 'page-popover-mail',
  templateUrl: 'popover-list-inbox.html',
})
export class PopoverMailPage {
  myDatabase: string = 'DATABASE_INBOX'
  items: Array<MyPopover>

  constructor(
    private toastController: ToastController,
    private eventService: EventService,
    private httpService: HttpServiceProvider,
    private router: Router,
    private alertController: AlertController
  ) {
    console.log('[PopoverMailPage.constructor]')
    this.items = [
      { title: 'Configuración', path: 'inbox-settings' },
      { title: 'Limpiar base de datos', dispatch: 'presentAlert' },
    ]
  }

  async open(payload: MyPopover) {
    console.log('[PopoverMailPage.open]')
    if (payload.path) {
      await this.router.navigate([payload.path])
    } else {
      switch (payload.dispatch) {
        case 'presentAlert':
          await this.presentAlert()
          break
      }
    }
  }

  async presentAlert() {
    console.log('[PopoverMailPage.presentAlert]')

    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '¿Seguro que quieres limpiar la base de datos INBOX?',
      message: 'Esta acción eliminará todos los registros.',
      buttons: [
        {
          text: 'OK',
          role: 'ok',
          handler: () => {
            this.httpService.removeStorage(this.myDatabase).then(() => {
              this.eventService.publish()
              this.presentToast('Base de datos limpiada')
            })
          },
        },
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: () => ({}),
        },
      ],
    })
    await alert.present()
  }

  async presentToast(message: string, duration: number = 1500) {
    console.log('[PopoverMailPage.presentToast]')

    const toast = await this.toastController.create({
      message: message,
      duration: duration,
      position: 'bottom',
    })
    await toast.present()
  }
}
