import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'
import { MyPopover } from '../../../core/types/MyPopover'
import { HttpServiceProvider } from '../../../../providers/http-service/http-service'

@Component({
  selector: 'page-popover-mail',
  templateUrl: 'popover-list-inbox.html',
})
export class PopoverMailPage {
  myDatabase: string = 'DATABASE_INBOX'
  items: Array<MyPopover>

  constructor(private httpService: HttpServiceProvider, private router: Router, private alertController: AlertController) {
    console.log('[PopoverMailPage.constructor]')
    this.items = [
      { title: 'Settings', path: 'inbox-settings' },
      { title: 'Clean database', dispatch: 'presentAlert' },
    ]
  }

  async presentAlert() {
    console.log('[PopoverMailPage.presentAlert]')

    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '¿Seguro que quieres limpiar la base de datos INBOX?',
      message: 'Esta acción eliminará todos los registros',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            this.httpService.removeStorage(this.myDatabase).then(() => {
              console.log('eliminado')
              // this.notificationService.notifyInfo('Database cleaned')
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
}
