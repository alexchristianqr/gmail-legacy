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
    this.storage.set('DATABASE_INBOX',initDB)
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

        // const init = [
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

        const init = [
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
