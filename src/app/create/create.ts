import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PopoverCreatePage } from './layouts/popover-create'
import { AlertController, PopoverController } from '@ionic/angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { StorageService } from '../core/services/storage/storage.service'
import { HttpServiceProvider } from '../../providers/http-service/http-service'
import { MyMessage } from '../core/types/MyMessage'

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage implements OnInit {
  formGroup: FormGroup
  submitted: boolean | undefined
  loading: boolean = false

  constructor(
    private httpService: HttpServiceProvider,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    public popoverCtrl: PopoverController,
    public router: Router,
    private alertController: AlertController
  ) {
    console.log('[CreatePage.constructor]')
    this.formGroup = this.formGroupInitialize()
  }

  ngOnInit(): void {
    console.log('[CreatePage.ngOnInit]')
    this.formGroup = this.formGroupInitialize()
  }

  formGroupInitialize(): FormGroup {
    console.log('[CreatePage.formGroupInitialize]')
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
    console.log('[CreatePage.back]')
    await this.router.navigate(['inbox'])
  }

  async presentAlert() {
    console.log('[CreatePage.presentAlert]')

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
    console.log('[CreatePage.presentPopover]')

    const popover = await this.popoverCtrl.create({ component: PopoverCreatePage, event: event, dismissOnSelect: true })
    await popover.present()
  }

  async onSubmit() {
    console.log('[CreatePage.onSubmit]')

    this.submitted = true

    // Detener envío del formulario
    if (this.formGroup.invalid) {
      return this.presentAlert()
    }

    // Set data
    this.loading = true
    const data = this.formGroup.value

    // API
    return this.httpService
      .getStorage(data.database)
      .then(async (res) => {
        const messages: Array<MyMessage> = [...res]
        messages.unshift(data)

        await this.httpService.setStorage(data.database, messages)
        await this.back()
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
