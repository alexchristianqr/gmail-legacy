import { Component, OnInit } from '@angular/core'
import { NavController, PopoverController } from '@ionic/angular'
import { NotificationServiceProvider } from '../../../providers/notification-service/notification-service'
import { HttpServiceProvider } from '../../../providers/http-service/http-service'
import { PopoverDetailPage } from './layouts/popover-detail'
import { Storage } from '@ionic/storage'
import { DialogServiceProvider } from '../../../providers/dialog-service/dialog-service'
import { Router } from '@angular/router'
import { MyMessage } from '../../core/types/MyMessage'
import { MyParams } from '../../core/types/MyParams'
import { MyPreferences } from '../../core/types/MyPreferences'
import { EventService } from '../../core/services/events/event.service'
import { SHARED_PREFERENCES } from '../../shared-preferences'

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit {
  myDatabase: string = 'DATABASE_INBOX'
  MY_SHARED_PREFERENCES: MyPreferences = SHARED_PREFERENCES
  data: MyParams | any
  item?: MyMessage

  constructor(
    private eventService: EventService,
    private popoverCtrl: PopoverController,
    private httpService: HttpServiceProvider,
    private notificationService: NotificationServiceProvider,
    private dialogService: DialogServiceProvider,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
  ) {
    console.log('[DetailPage.constructor]')
    this.getState()
    this.updateMessageReadOrUnread('Mensaje leido', true)
  }

  ngOnInit() {
    console.log('[DetailPage.ngOnInit]')
    this.getState()
  }

  getState(): void {
    console.log('[DetailPage.getState]')
    this.data = this.router.getCurrentNavigation()?.extras.state
    this.item = this.data?.item
    // this.eventService.publish(this.item)
  }

  async back() {
    console.log('[DetailPage.back]')
    this.eventService.publish(this.item)
    await this.router.navigate([this.data.path])
  }

  /**
   * Eliminar mensaje
   */
  async deleteMessage() {
    console.log('[DetailPage.deleteMessage]')
    return this.httpService.removeItem(this.myDatabase, this.item).then(() => {
      console.log('item eliminado')
      this.back()
    })
  }

  /**
   * Aatualizar mensaje como leído o no leído
   * @param label
   * @param value
   */
  updateMessageReadOrUnread(label: string, value: boolean): void {
    console.log('[DetailPage.markMessageReadOrUnread]')
    this.httpService.updateItem(this.myDatabase, this.item, 'is_read', value).then(async () => {
      console.log(label)
      if (!value) await this.back() // Solamente al marcar como no leido volver a INBOX
    })
  }

  async presentPopover(event: Event) {
    console.log('[DetailPage.presentPopover]')
    const popover = await this.popoverCtrl.create({ component: PopoverDetailPage, event: event, dismissOnSelect: true })
    await popover.present()
  }
}
