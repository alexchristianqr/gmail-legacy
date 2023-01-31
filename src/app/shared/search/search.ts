import { Component } from '@angular/core'
import { NavController, NavParams } from '@ionic/angular'
import { Storage } from '@ionic/storage'
import { DetailPage } from '../../inbox/detail/detail'
import { SHARED_PREFERENCE } from '../../shared-preference'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  items: any = []

  constructor(public navCtrl: NavController, public storage: Storage, public navParams: NavParams) {}

  // async back() {
  //   if (this.navParams.data.database === SHARED_PREFERENCE.DB.DI) {
  //     // this.event.publish('eventMailsInboxFetch')
  //   } else if (this.navParams.data.database === SHARED_PREFERENCE.DB.DS) {
  //     // this.event.publish('eventMailsSentFetch')
  //   }
  //   // return this.viewCtrl.dismiss()
  // }

  async fnViewDetail(data: any, index: any) {
    // return this.navCtrl.push(DetailPage, { data: data, index: index })
    return this.navCtrl.navigateRoot('inbox/detail', { queryParams: { data: data, index: index } })
  }

  async getItems(e: any) {
    let text = e.target.value
    await this.storage.set('text_search', e.target.value)

    this.items = []
    return this.storage
      .get(this.navParams.data['database'])
      .then((data) => {
        // if (data != null) {
        //   if (text.toLowerCase().length == 0) {
        //     return (this.items = [])
        //   } else {
        //     // return (this.items = data.filter((objeto: {name:string,subject: string, message:string}) => {
        //     //   if (
        //     //     objeto.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
        //     //     objeto.subject.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
        //     //     objeto.message.toLowerCase().indexOf(text.toLowerCase()) > -1
        //     //   ) {
        //     //     return true
        //     //   }
        //     // }))
        //   }
        // }
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
