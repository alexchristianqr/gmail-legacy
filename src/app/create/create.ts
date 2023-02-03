import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { PopoverCreatePage } from './layouts/popover-create'
import { AlertController, PopoverController } from '@ionic/angular'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { StorageService } from '../core/services/storage/storage.service'
import { HttpServiceProvider } from '../../providers/http-service/http-service'
import { MyMessage } from '../core/types/MyMessage'
import { EventService } from '../core/services/events/event.service'

@Component({
  selector: 'page-create',
  templateUrl: 'create.html',
})
export class CreatePage implements OnInit {
  myDatabase: string = 'DATABASE_INBOX'
  formGroup: FormGroup
  submitted: boolean | undefined
  loading: boolean = false
  uniqueUID: string = ''

  constructor(
    private eventService: EventService,
    private httpService: HttpServiceProvider,
    private storageService: StorageService,
    private formBuilder: FormBuilder,
    private popoverCtrl: PopoverController,
    private router: Router,
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
      uid: this.formBuilder.control(null, [Validators.required]),
      database: this.formBuilder.control('DATABASE_INBOX', [Validators.required]),
      name: this.formBuilder.control(null, [Validators.required]),
      subject: this.formBuilder.control(null, [Validators.required]),
      message: this.formBuilder.control(null, [Validators.required]),
      from: this.formBuilder.control('alexchristianqr@utp.edu.pe', [Validators.required, Validators.email]),
      to: this.formBuilder.control('teacher2022@utp.edu.pe', [Validators.required, Validators.email]),
      is_read: this.formBuilder.control(false, [Validators.required]),
      created_at: this.formBuilder.control(Date.now(), [Validators.required]),
    })
  }

  /**
   * Enviar formulario
   */
  async onSubmit() {
    console.log('[CreatePage.onSubmit]')

    this.submitted = true

    // Obtener UID
    const uniqueUID = await this.getUniqueUID()
    this.formGroup.patchValue({ uid: uniqueUID })

    // Detener envío del formulario
    if (this.formGroup.invalid) {
      return this.presentAlert()
    }

    // Set data
    this.loading = true
    const item: MyMessage = this.formGroup.value

    // API
    return this.httpService
      .addItem(item.database, item)
      .then(async () => {
        await this.back()
      })
      .catch((error) => {
        console.error(error)
      })
  }

  getUniqueUID() {
    return this.httpService.getUniqueUID(this.myDatabase)
  }

  /**
   * Volver a la página anterior
   */
  async back() {
    console.log('[CreatePage.back]')
    this.eventService.publish()
    await this.router.navigate(['inbox'])
  }

  /**
   * Alert UI
   */
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

  /**
   * Popover UI
   * @param event
   */
  async presentPopover(event: Event) {
    console.log('[CreatePage.presentPopover]')

    const popover = await this.popoverCtrl.create({ component: PopoverCreatePage, event: event, dismissOnSelect: true })
    await popover.present()
  }
}
