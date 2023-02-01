import { Component, ViewChild } from '@angular/core'
import { PopoverController } from '@ionic/angular'
import { HttpServiceProvider } from '../../../providers/http-service/http-service'
import { Storage } from '@ionic/storage'
import { PopoverMailPage } from './layouts/popover-list-inbox'
import { Router } from '@angular/router'
import { MyMessage } from '../../core/types/MyMessage'
import { MyParams } from '../../core/types/MyParams'

@Component({
  selector: 'page-mails-inbox',
  templateUrl: 'list-inbox.html',
  styleUrls: ['list-inbox.scss'],
})
export class MailsInboxPage {
  @ViewChild('popover') popover: any
  items: Array<MyMessage> = []
  public MYSHAREDPREFERENCES: any = {}

  constructor(private popoverCtrl: PopoverController, private httpService: HttpServiceProvider, private storage: Storage, private router: Router) {
    this.fnFetch()
  }

  async doInfinite() {
    console.log('infinite')
  }

  async doRefresh(event: any) {
    console.log('Begin async operation', { event })
    return this.storage
      .get('DATABASE_INBOX')
      .then((data) => {
        setTimeout(() => {
          this.items = data
          this.httpService.loadPreferences(this)
          console.log('Async operation has ended')
          event.target.complete()
        }, 2000)
      })
      .catch((error) => {
        console.error(error)
        // this.dialogService.closeLoading()
      })
  }

  async fnViewDetail(item: MyMessage) {
    const data: MyParams = { item: item, path: 'inbox' }
    await this.router.navigate(['inbox-detail'], { state: data })
  }

  async fnViewSearch() {
    const data: MyParams = { database: 'DATABASE_INBOX', path: 'inbox' }
    await this.router.navigate(['search'], { state: data })
  }

  async fnViewCreate() {
    await this.router.navigate(['create'])
  }

  public fnFetch() {
    // this.dialogService.showLoading()
    // const res =  this.storage.get('DATABASE_INBOX')
    // console.log({res})
    // return res
    this.storage
      .get('DATABASE_INBOX')
      .then((data) => {
        if (data) {
          this.items = data
        } else {
          this.items = []
        }

        this.httpService.loadPreferences(this)
        // this.dialogService.closeLoading()

        console.log('Fetch storage from Mails Inbox!')
      })
      .catch((error) => {
        console.error(error)
        // this.dialogService.closeLoading()
      })
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({ component: PopoverMailPage, event: event, dismissOnSelect: true })
    await popover.present()
  }
}
