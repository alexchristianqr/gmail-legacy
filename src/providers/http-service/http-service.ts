import { Injectable } from '@angular/core'
import { SHARED_PREFERENCES } from '../../app/shared-preferences'
import { Storage } from '@ionic/storage-angular'
import { MyPreferences } from '../../app/core/types/MyPreferences'

@Injectable({
  providedIn: 'root',
})
export class HttpServiceProvider {
  private initDataDB: Array<any> = [
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
  public initSharedPreferences: MyPreferences = SHARED_PREFERENCES
  public myDatabase: string = 'DATABASE_INBOX'
  public mySharedPreferences: string = 'SHARED_PREFERENCES'

  constructor(private storage: Storage) {
    console.log('[HttpServiceProvider.constructor]')
    this.storeInitialize()
  }

  storeInitialize(): void {
    console.log('[HttpServiceProvider.storeInitialize]')
    this.storage = new Storage({
      /* add your config here */
    })
    this.storage.create().then(async () => {
      await this.loadDatabaseStorage(this.myDatabase)
      await this.loadSharedPreferences()
      // await this.storage.set('DATABASE_INBOX', this.initDataDB)
      // await this.storage.set('SHARED_PREFERENCES', this.initSharedPreferences)
    })
  }

  async getStorage(label: string) {
    console.log('[HttpServiceProvider.getStorage]', { label })
    return this.storage.get(label)
  }

  async setStorage(key: string, value: any) {
    console.log('[HttpServiceProvider.setStorage]', { key, value })
    return this.storage.set(key, value)
  }

  loadPreferences2(self: any) {
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
            .set('SHARED_PREFERENCE', this.initSharedPreferences)
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

  loadPreferences(label: string, self?: any): void {
    console.log('[HttpServiceProvider.loadPreferences]')

    // this.getStorage(label).then((data) => {
    //   if (!data) {
    //     switch (label) {
    //       case 'SHARED_PREFERENCES':
    //         this.setStorage(label, this.initSharedPreferences).then((res) => {
    //           self.MYSHAREDPREFERENCES = res
    //           console.log('Carga de bd por default!')
    //         })
    //         break
    //       case 'DATABASE_INBOX':
    //         this.setStorage(label, this.initDataDB).then((res) => {
    //           console.log('Carga de bd por default!')
    //         })
    //         break
    //     }
    //     return
    //   }
    //   this.setStorage(label, data).then(() => {
    //     console.log('Cargar de base de datos por caché!')
    //   })
    // })
  }

  async loadDatabaseStorage(label: string) {
    console.log('[HttpServiceProvider.loadDatabaseStorage]')

    return this.getStorage(label).then((data) => {
      if (!data) {
        return this.setStorage(label, this.initDataDB).then(() => {
          console.log(`Cargar BD ${label} por defecto`)
          return this.getStorage(label)
        })
      }
      return this.setStorage(label, data).then(() => {
        console.log(`Cargar BD ${label} por caché`)
        return this.getStorage(label)
      })
    })
  }

  async loadSharedPreferences() {
    console.log('[HttpServiceProvider.loadSharedPreferences]')

    return this.getStorage(this.mySharedPreferences).then((data) => {
      if (!data) {
        return this.setStorage(this.mySharedPreferences, this.initSharedPreferences).then((data) => {
          console.log({ data })
          // SHARED_PREFERENCES.create = data.create
          // SHARED_PREFERENCES.inbox = data.inbox
          // SHARED_PREFERENCES.detail = data.detail
          // SHARED_PREFERENCES.general = data.general
          console.log(`Cargar BD ${this.mySharedPreferences} por defecto`)
          return this.getStorage(this.mySharedPreferences)
          // .then(data => console.log({data}))
        })
      }
      return this.setStorage(this.mySharedPreferences, data).then(() => {
        console.log(`Cargar BD ${this.mySharedPreferences} por caché`)
        return this.getStorage(this.mySharedPreferences)
        // .then(data => console.log({data}))
      })
    })
  }

  create(self: any) {
    // Get storage
    let msg = ''
    self.storage
      .get(self.params.database)
      .then((data: any) => {
        console.log({ data }, 'jejej')

        if (!data) {
          data = this.initDataDB
        }

        // data = data == null ? [] : data;
        data.unshift(self.params)
        // Set storage
        self.storage
          .set(self.params.database, data)
          .then((data: any) => {
            switch (self.params.database) {
              case SHARED_PREFERENCES.DB.DI:
                self.event.publish('eventMailsInboxFetch')
                msg = 'inbox'
                break
              case SHARED_PREFERENCES.DB.DS:
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
}
