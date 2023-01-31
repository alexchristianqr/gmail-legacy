import { Component, OnInit } from '@angular/core'
import { NavController, PopoverController } from '@ionic/angular'
import { NotificationServiceProvider } from '../../../providers/notification-service/notification-service'
import { HttpServiceProvider } from '../../../providers/http-service/http-service'
import { PopoverDetailPage } from './layouts/popover-detail'
import { Storage } from '@ionic/storage'
import { DialogServiceProvider } from '../../../providers/dialog-service/dialog-service'
import { Router } from '@angular/router'

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage implements OnInit {
  index: any
  data: any = {}
  newdate: any
  public MYSHAREDPREFERENCES: any = {}

  constructor(
    private popoverCtrl: PopoverController,
    private httpService: HttpServiceProvider,
    private notificationService: NotificationServiceProvider,
    private dialogService: DialogServiceProvider,
    private navCtrl: NavController,
    private storage: Storage,
    private router: Router
  ) {
    this.httpService.loadPreferences(this)
    this.data = this.router.getCurrentNavigation()?.extras.state
  }

  ngOnInit(): void {
    this.httpService.loadPreferences(this)
    this.data = this.router.getCurrentNavigation()?.extras.state
  }

  async back() {
    await this.router.navigate(['inbox'])
  }

  async fnRemove() {
    return this.storage
      .get('SHARED_PREFERENCE')
      .then((data) => {
        let doFunc = () => {
          this.notificationService.notifyInfo('Removing...', 0)
          this.httpService.remove(this, this.data.database)
        }

        if (data != null) {
          if (data.CONFIRM_BEFORE_REMOVING) {
            this.dialogService.dialogQuestion('', 'Do you want to remove this mail?', () => {
              doFunc()
            })
          } else {
            doFunc()
          }
        } else {
          doFunc()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({ component: PopoverDetailPage, event: event, dismissOnSelect: true })
    await popover.present()
  }

  update(objeto: any, index: any, bool = null) {
    objeto.is_read = bool != null ? bool : true
    this.storage
      .get(objeto.database)
      .then((data) => {
        if (data != null) {
          data.forEach((value: any, key: any) => {
            if (key == index) {
              data[key] = objeto
            }
          })
          this.storage
            .set(objeto.database, data)
            .then(() => {
              console.log('Object of database storage updated!')
            })
            .catch((error) => {
              console.error(error)
            })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  async fnUnRead() {
    this.notificationService.notifyInfo('Changing...', 0)
    // await this.update(this.data, this.index, false)
    await this.navCtrl.pop()
    this.notificationService.toast.dismiss()
    this.notificationService.notifyInfo('Changed mail to unread')
  }
}
