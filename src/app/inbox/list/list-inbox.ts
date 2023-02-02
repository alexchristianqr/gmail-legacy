import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { PopoverController } from '@ionic/angular'
import { HttpServiceProvider } from '../../../providers/http-service/http-service'
import { Storage } from '@ionic/storage'
import { PopoverMailPage } from './layouts/popover-list-inbox'
import { Router } from '@angular/router'
import { MyMessage } from '../../core/types/MyMessage'
import { MyParams } from '../../core/types/MyParams'
import { MyPreferences } from '../../core/types/MyPreferences'
import { EventService } from '../../core/services/events/event.service'
import { Subscription } from 'rxjs'
import { SHARED_PREFERENCES } from '../../shared-preferences'

@Component({
  selector: 'page-mails-inbox',
  templateUrl: 'list-inbox.html',
  styleUrls: ['list-inbox.scss'],
})
export class MailsInboxPage implements OnDestroy {
  @ViewChild('popover') popover: any
  myDatabase: string = 'DATABASE_INBOX'
  MY_SHARED_PREFERENCES: MyPreferences = SHARED_PREFERENCES
  mySubscribe$: Subscription
  items: Array<MyMessage> = []

  constructor(
    private eventService: EventService,
    private popoverCtrl: PopoverController,
    private httpService: HttpServiceProvider,
    private storage: Storage,
    private router: Router
  ) {
    console.log('[MailsInboxPage.constructor]')
    this.mySubscribe$ = this.eventService.dataSource.subscribe(() => this.listInbox(true))
    this.listInbox()
  }

  ngOnDestroy() {
    console.log('[MailsInboxPage.ngOnDestroy]')
    this.mySubscribe$.unsubscribe()
  }

  listInbox(loadPreferences: boolean = false): void {
    this.httpService.loadDatabaseStorage(this.myDatabase).then((data) => {
      this.items = data
      if (!loadPreferences) return
      this.httpService.loadSharedPreferences().then((data) => {
        this.MY_SHARED_PREFERENCES.create = data.create
        this.MY_SHARED_PREFERENCES.inbox = data.inbox
        this.MY_SHARED_PREFERENCES.detail = data.detail
        this.MY_SHARED_PREFERENCES.general = data.general
      })
    })
  }

  async doRefresh(event: any) {
    console.log('Begin async operation', { event })
    return this.storage
      .get(this.myDatabase)
      .then((data) => {
        setTimeout(() => {
          this.items = data
          this.httpService.loadPreferences(this.myDatabase, this)
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
    // console.log({ data })
    await this.router.navigate(['inbox-detail'], { state: data })
    // this.ngOnDestroy()
  }

  async fnViewSearch() {
    const data: MyParams = { database: 'DATABASE_INBOX', path: 'inbox' }
    // console.log({ data })
    await this.router.navigate(['search'], { state: data })
  }

  async fnViewCreate() {
    await this.router.navigate(['create'])
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({ component: PopoverMailPage, event: event, dismissOnSelect: true })
    await popover.present()
  }
}
