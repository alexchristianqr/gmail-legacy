import { Component, OnInit } from '@angular/core'
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router'
import { PopoverCreatePage } from './layouts/popover-create'
import { AlertController, PopoverController } from '@ionic/angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { StorageService } from '../core/services/storage/storage.service'

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage implements OnInit {
  formGroup: FormGroup
  submitted: boolean | undefined
  loading: boolean = false

  constructor(
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    public popoverCtrl: PopoverController,
    public storage: Storage,
    public router: Router,
    private alertController: AlertController
  ) {
    this.formGroup = this.formGroupInitialize()
  }

  ngOnInit(): void {
    this.formGroup = this.formGroupInitialize()
  }

  formGroupInitialize(): FormGroup {
    return this.formBuilder.group({
      name: this.formBuilder.control(null, [Validators.required]),
      database: this.formBuilder.control('DATABASE_INBOX', [Validators.required]),
      from: this.formBuilder.control('alexchristianqr@utp.edu.pe', [Validators.required, Validators.email]),
      to: this.formBuilder.control('teacher2022@utp.edu.pe', [Validators.required, Validators.email]),
      created_at: this.formBuilder.control(new Date(), [Validators.required]),
      is_read: this.formBuilder.control(false, [Validators.required]),
      message: this.formBuilder.control('', [Validators.required]),
      subject: this.formBuilder.control('', [Validators.required]),
    })
  }

  async back() {
    await this.router.navigate(['inbox'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'No se puede enviar tu mensaje, porque hay campos vacios.',
      buttons: [
        {
          text: 'OK',
          role: 'cancel',
        },
      ],
    })
    await alert.present()
  }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({ component: PopoverCreatePage, event: event, dismissOnSelect: true })
    await popover.present()
  }

  async onSubmit() {
    this.submitted = true

    // Detener envío del formulario
    if (this.formGroup.invalid) {
      return this.presentAlert()
    }

    // Set data
    this.loading = true
    const data = this.formGroup.value
    console.log({ data })

    // API
    return this.storage
      .get(data.database)
      .then((res) => {
        const messages: Array<object> = [...res]
        messages.unshift(data)
        this.storage.set(data.database, messages)
        this.back()
        // function doFunc() {
        //   // self.notificationService.notifyInfo('Sending...', 0)
        //   this.httpService.create(self)
        // }

        // if (data != null) {
        //   if (data.CONFIRM_BEFORE_SENDING) {
        //     this.dialogService.dialogQuestion('', 'Do you want to send this message?', () => {
        //       doFunc()
        //     })
        //   } else {
        //     doFunc()
        //   }
        // } else {
        //   doFunc()
        // }
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
