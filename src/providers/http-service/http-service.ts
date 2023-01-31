import { Injectable, OnInit } from '@angular/core'
import { SHARED_PREFERENCE } from '../../app/shared-preference'
import { Storage } from '@ionic/storage-angular'

// import { Events, NavController } from 'ionic-angular';
// import { NotificationServiceProvider } from '../notification-service/notification-service';

@Injectable({
  providedIn: 'root',
})
export class HttpServiceProvider implements OnInit {
  constructor(private storage: Storage) {
    this.storage.create()
    // const initDB = [
    //   {
    //     created_at: '2023-01-25 11:50',
    //     database: 'DATABASE_INBOX',
    //     from: 'alexchristianqr@utp.edu.pe',
    //     is_read: true,
    //     message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
    //     name: 'Alex',
    //     subject: 'Clase 001',
    //     to: 'teacher2022@utp.edu.pe',
    //   },
    //   {
    //     created_at: '2023-01-25 11:50',
    //     database: 'DATABASE_INBOX',
    //     from: 'alexchristianqr@utp.edu.pe',
    //     is_read: true,
    //     message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
    //     name: 'Alex',
    //     subject: 'Clase 001',
    //     to: 'teacher2022@utp.edu.pe',
    //   },
    //   {
    //     created_at: '2023-01-25 11:50',
    //     database: 'DATABASE_INBOX',
    //     from: 'alexchristianqr@utp.edu.pe',
    //     is_read: true,
    //     message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
    //     name: 'Alex',
    //     subject: 'Clase 001',
    //     to: 'teacher2022@utp.edu.pe',
    //   },
    //   {
    //     created_at: '2023-01-25 11:50',
    //     database: 'DATABASE_INBOX',
    //     from: 'alexchristianqr@utp.edu.pe',
    //     is_read: true,
    //     message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
    //     name: 'Alex',
    //     subject: 'Clase 001',
    //     to: 'teacher2022@utp.edu.pe',
    //   },
    //   {
    //     created_at: '2023-01-25 11:50',
    //     database: 'DATABASE_INBOX',
    //     from: 'alexchristianqr@utp.edu.pe',
    //     is_read: true,
    //     message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
    //     name: 'Alex',
    //     subject: 'Clase 001',
    //     to: 'teacher2022@utp.edu.pe',
    //   },
    //   {
    //     created_at: '2023-01-25 11:50',
    //     database: 'DATABASE_INBOX',
    //     from: 'alexchristianqr@utp.edu.pe',
    //     is_read: true,
    //     message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
    //     name: 'Yolanda',
    //     subject: 'Clase 001',
    //     to: 'teacher2022@utp.edu.pe',
    //   },
    // ]
    // this.storage.set('DATABASE_INBOX',initDB)
  } // private storage: Storage // private event: Events, // private navCtrl: NavController, // private notificationService: NotificationServiceProvider,

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    // await this.storage.create();
  }

  loadPreferences(self: any) {
    this.storage
      .get('SHARED_PREFERENCE')
      .then((data: any) => {
        if (data != null) {
          if (self.MYSHAREDPREFERENCES != undefined) {
            self.MYSHAREDPREFERENCES = data
            console.log(data)
          }
          console.log('Loaded shared preferences cache!')
        } else {
          self.storage
            .set('SHARED_PREFERENCE', SHARED_PREFERENCE)
            .then((data: any) => {
              if (self.MYSHAREDPREFERENCES != undefined) {
                self.MYSHAREDPREFERENCES = data
              }
              console.log('Loaded shared preferences by default!')
            })
            .catch((error: any) => {
              console.log(error)
            })
        }
      })
      .catch((error: any) => {
        console.error(error)
      })
  }

  create(self: any) {
    // Get storage
    let msg = ''
    self.storage
      .get(self.params.database)
      .then((data: any) => {
        console.log({ data }, 'jejej')

        const init = [
          {
            created_at: '2023-01-25 11:50',
            database: 'DATABASE_INBOX',
            from: 'alexchristianqr@utp.edu.pe',
            is_read: true,
            message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
            name: 'Alex',
            subject: 'Clase 001',
            to: 'teacher2022@utp.edu.pe',
          },
          {
            created_at: '2023-01-25 11:50',
            database: 'DATABASE_INBOX',
            from: 'alexchristianqr@utp.edu.pe',
            is_read: true,
            message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
            name: 'Alex',
            subject: 'Clase 001',
            to: 'teacher2022@utp.edu.pe',
          },
          {
            created_at: '2023-01-25 11:50',
            database: 'DATABASE_INBOX',
            from: 'alexchristianqr@utp.edu.pe',
            is_read: true,
            message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
            name: 'Alex',
            subject: 'Clase 001',
            to: 'teacher2022@utp.edu.pe',
          },
          {
            created_at: '2023-01-25 11:50',
            database: 'DATABASE_INBOX',
            from: 'alexchristianqr@utp.edu.pe',
            is_read: true,
            message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
            name: 'Alex',
            subject: 'Clase 001',
            to: 'teacher2022@utp.edu.pe',
          },
          {
            created_at: '2023-01-25 11:50',
            database: 'DATABASE_INBOX',
            from: 'alexchristianqr@utp.edu.pe',
            is_read: true,
            message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
            name: 'Alex',
            subject: 'Clase 001',
            to: 'teacher2022@utp.edu.pe',
          },
          {
            created_at: '2023-01-25 11:50',
            database: 'DATABASE_INBOX',
            from: 'alexchristianqr@utp.edu.pe',
            is_read: true,
            message: 'Hola profesor\nLe escribo para consultarle sobre el tema de Funciones Lineales;  como puedo hacer para x-5 = 0 solo si X e R y X <= 1',
            name: 'Yolanda',
            subject: 'Clase 001',
            to: 'teacher2022@utp.edu.pe',
          },
        ]
        if (!data) {
          data = init
        }

        // data = data == null ? [] : data;
        data.unshift(self.params)
        // Set storage
        self.storage
          .set(self.params.database, data)
          .then((data: any) => {
            switch (self.params.database) {
              case SHARED_PREFERENCE.DB.DI:
                self.event.publish('eventMailsInboxFetch')
                msg = 'inbox'
                break
              case SHARED_PREFERENCE.DB.DS:
                self.event.publish('eventMailsSentFetch')
                msg = 'sent'
                break
              default:
                throw new Error('Not shared preference database')
            }
            self.navCtrl.pop()
            self.notificationService.toast.dismiss()
            self.notificationService.notifyInfo('Message ' + msg + ' successfully')
          })
          .catch((error: any) => {
            console.error(error)
            self.notificationService.toast.dismiss()
            self.notificationService.notifyError('Error, Getting list of database')
          })
      })
      .catch((error: any) => {
        console.error(error)
        self.notificationService.toast.dismiss()
        self.notificationService.notifyError('Error, Message not this process')
      })
  }

  async savedInitialize({ data = {}, database = '' }) {
    if (!data) throw new Error('Not found data')

    // Set storage
    // return self.storage
    //   .set(database, data)
    //   .then((response) => {
    //     console.log({ response })
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }

  remove(self: any, database: any): void {
    self.storage
      .get(database)
      .then((data: any) => {
        data.forEach((item: any, i: any) => {
          if (self.index === i) {
            data.splice(i, 1)
            self.storage.set(database, data).then(() => {
              if (database === 'DATABASE_SENT') {
                //enviados
                self.event.publish('eventMailsSentFetch')
              } else if (database === 'DATABASE_INBOX') {
                //bandeja de entrada
                self.event.publish('eventMailsInboxFetch')
              } else if (database === 'DATABASE_OUTBOX') {
                //bandeja de salida
              } else if (database === 'DATABASE_DRAFTS') {
                //borradores
              }
              self.navCtrl.pop()
            })
            self.notificationService.toast.dismiss()
            self.notificationService.notifyInfo('1 element removed successfully')
          }
        })
      })
      .catch((error: any) => {
        console.error(error)
        self.notificationService.toast.dismiss()
        self.notificationService.notifyError('Error, element not removed')
      })
  }

  archive(objeto: any): void {}
}
