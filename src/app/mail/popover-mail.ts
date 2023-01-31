import { Component } from '@angular/core'
import { ModalController, NavController } from '@ionic/angular'
import { ModalMailPage } from './modal-mail'
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service'
import { Storage } from '@ionic/storage'
import { NotificationServiceProvider } from '../../providers/notification-service/notification-service'

@Component({
  selector: 'page-popover-mail',
  templateUrl: 'popover-mail.html',
})
export class PopoverMailPage {
  list: Array<{ title: string; component: null | undefined | Object; dispatch: null | undefined | string }>

  constructor(
    public notificationService: NotificationServiceProvider,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public dialogService: DialogServiceProvider,
    public storage: Storage
  ) {
    this.list = [
      { title: 'Settings', component: ModalMailPage, dispatch: null },
      { title: 'Clean database', component: null, dispatch: 'fnClean' },
    ]
  }

  async fnClean() {
    return this.dialogService.dialogQuestion('Warning', 'Do you want to clean the database INBOX?', () => {
      this.storage.remove('DATABASE_INBOX').then(() => {
        console.log('DATABASE_INBOX removido!')
        // this.event.publish('eventMailsInboxFetch')
        this.notificationService.notifyInfo('Database cleaned')
        console.log('Storage cleaned!')
      })
    })
  }

  async open(objeto: any) {
    if (objeto.component) {
      // await this.navCtrl.push(objeto.component)
    } else {
      switch (objeto.dispatch) {
        case 'fnClean':
          await this.fnClean()
          break
      }
    }
  }
}
