import { Component, OnDestroy } from '@angular/core'
import { Events, ModalController, NavController, NavParams, PopoverController } from 'ionic-angular'
import { CreatePage } from '../create/create'
import { SearchPage } from '../search/search'
import { DetailPage } from '../detail/detail'
import { HttpServiceProvider } from '../../providers/http-service/http-service'
import { NotificationServiceProvider } from '../../providers/notification-service/notification-service'
import { DialogServiceProvider } from '../../providers/dialog-service/dialog-service'
import { Storage } from '@ionic/storage'
import { PopoverMailPage } from '../mail/popover-mail'
import { SHARED_PREFERENCE } from '../../app/shared-preference'

@Component({
  selector: 'page-mails-inbox',
  templateUrl: 'mails-inbox.html',
})
export class MailsInboxPage implements OnDestroy {
  ngOnDestroy(): void {
    this.event.unsubscribe('eventMailsInboxFetch')
    console.log('Events destroyed!')
  }

  database: any = []
  public MYSHAREDPREFERENCES: any = {}

  constructor(
    public popoverCtrl: PopoverController,
    public httpService: HttpServiceProvider,
    public notificationService: NotificationServiceProvider,
    public navCtrl: NavController,
    public event: Events,
    public modalCtrl: ModalController,
    public dialogService: DialogServiceProvider,
    public storage: Storage,
    public navParams: NavParams
  ) {
    this.fnFetch().then((r) => {
      this.event.subscribe('eventMailsInboxFetch', () => this.fnFetch())
      this.event.subscribe('eventMailsInboxPreferences', () => this.httpService.loadPreferences(this))
    })
  }

  async doInfinite() {
    console.log('infinite')
  }

  async doRefresh(refresher) {
    console.log('Begin async operation', { refresher })
    return this.storage
      .get('DATABASE_INBOX')
      .then((data) => {
        setTimeout(() => {
          this.database = data
          this.httpService.loadPreferences(this)
          console.log('Async operation has ended')
          refresher.complete()
        }, 2000)
      })
      .catch((error) => {
        console.error(error)
        this.dialogService.closeLoading()
      })
  }

  async fnViewDetail(data, index) {
    return this.navCtrl.push(DetailPage, { data: data, index: index })
  }

  async fnViewSearch() {
    return this.modalCtrl.create(SearchPage, { database: SHARED_PREFERENCE.DB.DI }).present()
  }

  async fnViewCreate() {
    return this.modalCtrl.create(CreatePage, { database: SHARED_PREFERENCE.DB.DI }).present()
  }

  async fnFetch() {
    this.dialogService.showLoading()
    return this.storage
      .get('DATABASE_INBOX')
      .then((data) => {
        if (data) {
          this.database = data
        } else {
          const initDB = [
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'alexchristianqr@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Alex Christian Quispe Roque',
              subject: 'Funciones lineales',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'maria@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Maria',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'yolanda@utp.edu.pe',
              is_read: true,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Yolanda',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'nando@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Nando',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'jorge@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Jorge',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'teresa@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Teresa',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'beatriz@utp.edu.pe',
              is_read: true,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Beatriz',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'carlos@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Carlos',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'estefany@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Estefany',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'gerardo@utp.edu.pe',
              is_read: false,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Gerardo',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
            {
              created_at: '2023-01-25 11:50',
              database: 'DATABASE_INBOX',
              from: 'kathy@utp.edu.pe',
              is_read: true,
              message:
                'Tu matrícula en Verano 2023 se registró correctamente. El detalle de cursos y secciones matriculados lo podrás encontrar líneas abajo. Por favor, toma nota de tu código de operación, el cual deberás proporcionar ante cualquier requerimiento o consulta que tengas respecto al proceso de matrícula.',
              name: 'Kathy',
              subject: 'Matricula Marzo 2023',
              to: 'sae@utp.edu.pe',
            },
          ]
          this.httpService.savedInitialize({ data: initDB, database: 'DATABASE_INBOX', self: this })
          this.database = []
        }

        this.httpService.loadPreferences(this)
        this.dialogService.closeLoading()

        console.log('Fetch storage from Mails Inbox!')
      })
      .catch((error) => {
        console.error(error)
        this.dialogService.closeLoading()
      })
  }

  async fnClean() {
    return this.dialogService.dialogQuestion('Warning', 'Do you want to clean the database INBOX?', () => {
      this.storage.remove('DATABASE_INBOX').then(() => {
        console.log('DATABASE_INBOX removido!')
        this.fnFetch()
        this.notificationService.notifyInfo('Database cleaned')
        console.log('Storage cleaned!')
      })
    })
  }

  async presentPopover(myEvent) {
    return this.popoverCtrl.create(PopoverMailPage).present({ ev: myEvent })
  }
}
