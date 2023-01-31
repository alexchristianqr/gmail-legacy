import { Component } from '@angular/core'
import { DialogServiceProvider } from '../../../../providers/dialog-service/dialog-service'
import { Storage } from '@ionic/storage'
import { NotificationServiceProvider } from '../../../../providers/notification-service/notification-service'
import { Router } from '@angular/router'
import { AlertController } from '@ionic/angular'

type MyPopover = {
  title: string
  path: string | null
  dispatch: string | null
}

@Component({
  selector: 'page-popover-mail',
  templateUrl: 'popover-list-inbox.html',
})
export class PopoverMailPage {
  list: Array<MyPopover>

  constructor(
    public notificationService: NotificationServiceProvider,
    public dialogService: DialogServiceProvider,
    public storage: Storage,
    public router: Router,
    private alertController: AlertController
  ) {
    this.list = [
      { title: 'Settings', path: 'inbox-settings', dispatch: null },
      { title: 'Clean database', path: null, dispatch: 'fnClean' },
    ]
  }

  async fnClean() {
    return this.dialogService.dialogQuestion('Warning', 'Do you want to clean the database INBOX?', () => {
      this.storage.remove('DATABASE_INBOX').then(() => {
        this.notificationService.notifyInfo('Database cleaned')
      })
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '¿Seguro que quieres limpiar la base de datos INBOX?',
      message: 'Esta acción eliminará todos los registros',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
          handler: () => {
            this.storage.remove('DATABASE_INBOX').then(() => {
              this.notificationService.notifyInfo('Database cleaned')
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
    if (payload.path) {
      await this.router.navigate([payload.path])
    } else {
      switch (payload.dispatch) {
        case 'fnClean':
          await this.presentAlert()
          break
      }
    }
  }
}
