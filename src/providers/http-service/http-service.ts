import { Injectable } from '@angular/core'
import { SHARED_PREFERENCE } from '../../app/shared-preference'
// import { Storage } from '@ionic/storage';
// import { Events, NavController } from 'ionic-angular';
// import { NotificationServiceProvider } from '../notification-service/notification-service';

@Injectable()
export class HttpServiceProvider {
  constructor() // private storage: Storage // private event: Events, // private navCtrl: NavController, // private notificationService: NotificationServiceProvider,
  {}

  loadPreferences(self: any) {
    self.storage
      .get('SHARED_PREFERENCE')
      .then((data) => {
        if (data != null) {
          if (self.MYSHAREDPREFERENCES != undefined) {
            self.MYSHAREDPREFERENCES = data
            console.log(data)
          }
          console.log('Loaded shared preferences cache!')
        } else {
          self.storage
            .set('SHARED_PREFERENCE', SHARED_PREFERENCE)
            .then((data) => {
              if (self.MYSHAREDPREFERENCES != undefined) {
                self.MYSHAREDPREFERENCES = data
              }
              console.log('Loaded shared preferences by default!')
            })
            .catch((error) => {
              console.log(error)
            })
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  create(self: any) {
    // Get storage
    let msg = ''
    self.storage
      .get(self.params.database)
      .then((data) => {
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
          .then((data) => {
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
          .catch((error) => {
            console.error(error)
            self.notificationService.toast.dismiss()
            self.notificationService.notifyError('Error, Getting list of database')
          })
      })
      .catch((error) => {
        console.error(error)
        self.notificationService.toast.dismiss()
        self.notificationService.notifyError('Error, Message not this process')
      })
  }

  async savedInitialize({ data, database, self }) {
    if (!data) throw new Error('Not found data')

    // Set storage
    return self.storage
      .set(database, data)
      .then((response) => {
        console.log({ response })
      })
      .catch((error) => {
        console.error(error)
      })
  }

  remove(self: any, database: any): void {
    self.storage
      .get(database)
      .then((data) => {
        data.forEach((item, i) => {
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
      .catch((error) => {
        console.error(error)
        self.notificationService.toast.dismiss()
        self.notificationService.notifyError('Error, element not removed')
      })
  }

  archive(objeto: any): void {}
}
