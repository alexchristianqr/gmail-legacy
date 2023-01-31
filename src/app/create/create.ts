import { Component, ElementRef } from '@angular/core'
// import {  NavController, NavParams, PopoverController } from '@ionic/angular'
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service'
import { HttpServiceProvider } from '../../providers/http-service/http-service'
import { Storage } from '@ionic/storage'
import { NotificationServiceProvider } from '../../providers/notification-service/notification-service'
import * as moment from 'dayjs'
import { Router } from '@angular/router'
import {PopoverCreatePage} from "../create/layouts/popover-create";
import {PopoverController} from "@ionic/angular";

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage {
  // @ViewChild('myInput')
  // myInput: ElementRef

  // resize() {
  //   this.myInput.nativeElement.style.height = this.myInput.nativeElement.scrollHeight + 'px'
  // }

  public params: any = {
    name: '',
    database: '',
    from: '',
    to: '',
    subject: '',
    message: '',
    created_at: '',
    is_read: false,
  }

  constructor(
    public popoverCtrl: PopoverController,
    public dialogService: DialogServiceProvider,
    public httpService: HttpServiceProvider,
    public notificationService: NotificationServiceProvider,
    public storage: Storage,
    public router: Router
  ) {
    moment.locale('es')
    // this.params.database = this.navParams.data['database']
    this.params.name = ''
    this.params.from = 'alexchristianqr@utp.edu.pe'
    this.params.to = 'teacher2022@utp.edu.pe'
    this.params.created_at = moment().format('YYYY-MM-DD HH:mm')
    this.params.is_read = false
    // this.myInput = null
  }

  async back() {
    await this.router.navigate(['inbox'])
  }

  async fnCreate() {
    let validate = false
    if (this.params.name == null || this.params.name == '') {
      validate = false
    } else if (this.params.from == null || this.params.from == '') {
      validate = false
    } else if (this.params.to == null || this.params.to == '') {
      validate = false
    } else if (this.params.subject == null || this.params.subject == '') {
      validate = false
    } else validate = !(this.params.message == null || this.params.message == '')

    // Validation
    if (!validate) return this.dialogService.dialogNotification('Fields detected empty!')

    let self = this
    return this.storage
      .get('SHARED_PREFERENCE')
      .then((data) => {
        function doFunc() {
          self.notificationService.notifyInfo('Sending...', 0)
          self.httpService.create(self)
        }

        if (data != null) {
          if (data.CONFIRM_BEFORE_SENDING) {
            this.dialogService.dialogQuestion('', 'Do you want to send this message?', () => {
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

  // async presentPopover(myEvent: any) {
  //   // return this.popoverCtrl.create(PopoverCreatePage).present({ ev: myEvent })
  // }

  presentPopover(event: Event) {
    return this.popoverCtrl.create({ component: PopoverCreatePage, event: event, dismissOnSelect: true }).then((res) => res.present())
  }
}
