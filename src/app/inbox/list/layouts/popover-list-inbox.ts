import { Component } from '@angular/core'
// import { ModalMailPage } from './modal-settings-list-inbox'
import { DialogServiceProvider } from '../../../../providers/dialog-service/dialog-service'
import { Storage } from '@ionic/storage'
import { NotificationServiceProvider } from '../../../../providers/notification-service/notification-service'
import {Router} from "@angular/router";

@Component({
  selector: 'page-popover-mail',
  templateUrl: 'popover-list-inbox.html',
})
export class PopoverMailPage {
  list: Array<{ title: string; component: null | undefined | Object; dispatch: null | undefined | string }>

  constructor(
    public notificationService: NotificationServiceProvider,
    public dialogService: DialogServiceProvider,
    public storage: Storage,
    public router: Router,
  ) {
    this.list = [
      { title: 'Settings', component: 'inbox-settings', dispatch: null },
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
      console.log({objeto})
      await this.router.navigate([objeto.component])
    } else {
      switch (objeto.dispatch) {
        case 'fnClean':
          await this.fnClean()
          break
      }
    }
  }
}
