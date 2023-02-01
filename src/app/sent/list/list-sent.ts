import { Component, OnDestroy } from '@angular/core'
import { ModalController, NavController, NavParams, PopoverController } from '@ionic/angular'
import { CreatePage } from '../../create/create'
import { SearchPage } from '../../shared/search/search'
import { DetailPage } from '../../inbox/detail/detail'
import { HttpServiceProvider } from '../../../providers/http-service/http-service'
import { NotificationServiceProvider } from '../../../providers/notification-service/notification-service'
import { DialogServiceProvider } from '../../../providers/dialog-service/dialog-service'
import { Storage } from '@ionic/storage'
import { PopoverMailPage } from '../../inbox/list/layouts/popover-list-inbox'
import { SHARED_PREFERENCES } from '../../shared-preferences'

@Component({
  selector: 'page-mails-sent',
  templateUrl: './list-sent.html',
})
export class MailsSentPage implements OnDestroy {
  myDatabase : string = 'DATABASE_INBOX'

  ngOnDestroy(): void {
    // this.event.unsubscribe('eventMailsSentFetch')
    console.log('Events destroyed!')
  }

  database: any = []
  public MYSHAREDPREFERENCES: any = {}

  constructor(
    public popoverCtrl: PopoverController,
    public httpService: HttpServiceProvider,
    public notificationService: NotificationServiceProvider,
    public navCtrl: NavController,
    // public event: Events,
    public modalCtrl: ModalController,
    public dialogService: DialogServiceProvider,
    public storage: Storage,
    public navParams: NavParams
  ) {
    this.fnFetch()

    // this.event.subscribe('eventMailsSentFetch', () => {
    //   this.fnFetch()
    // })

    // this.event.subscribe('eventMailsSentPreferences', () => {
    //   this.httpService.loadPreferences(this)
    // })
  }

  async fnViewDetail(data: any, index: any) {
    return this.navCtrl.navigateRoot('/detail', { queryParams: { data: data, index: index } })
  }

  async fnViewSearch() {
    return this.modalCtrl.create({ component: SearchPage, componentProps: { database: SHARED_PREFERENCES.DB.DS } })
  }

  async fnViewCreate() {
    return this.modalCtrl.create({ component: CreatePage, componentProps: { database: SHARED_PREFERENCES.DB.DS } })
  }

  fnFetch() {
    this.dialogService.showLoading('loading')
    return this.storage
      .get('DATABASE_SENT')
      .then((data) => {
        this.database = data == null ? [] : data
        this.httpService.loadPreferences(this.myDatabase)
        // this.dialogService.closeLoading()
        console.log('Fetch storage from Mails Sent!')
      })
      .catch((error) => {
        console.error(error)
        // this.dialogService.closeLoading()
      })
  }

  async fnClean() {
    return this.dialogService.dialogQuestion(
      'Warning',
      'Do you want to clean the database SENT?',
      () => {
        this.storage.remove('DATABASE_SENT').then(() => {
          console.log('DATABASE_SENT removido!')
          this.fnFetch()
          this.notificationService.notifyInfo('Database cleaned')
          console.log('Storage cleaned!')
        })
      },
      () => {
        console.log('Click on cancelled')
      }
    )
  }

  async presentPopover(myEvent: any) {
    return this.popoverCtrl.create({ component: PopoverMailPage, componentProps: { ev: myEvent } })
  }

  fnUnRead() {
    console.log('unread!')
  }
}
