import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { ModalCreatePage } from './modal-create'

@Component({
  selector: 'page-popover-create',
  templateUrl: 'popover-create.html',
})
export class PopoverCreatePage {
  list: Array<{ title: string; component: any }>

  constructor(public modalCtrl: ModalController) {
    this.list = [
      { title: 'Add Contacts', component: ModalCreatePage },
      { title: 'Discard', component: ModalCreatePage },
      { title: 'Settings', component: ModalCreatePage },
      { title: 'Help', component: ModalCreatePage },
    ]
  }

  async open(objeto: any) {
    // await this.viewCtrl.dismiss()
    // return this.modalCtrl.create(objeto.component).present()
  }
}
