import { Component } from '@angular/core'
import { ModalController, NavController } from '@ionic/angular'
import { ModalDetailPage } from './modal-detail'

@Component({
  selector: 'page-popover-detail',
  templateUrl: 'popover-detail.html',
})
export class PopoverDetailPage {
  list: Array<{ title: string; component: any }>

  constructor(public modalCtrl: ModalController, public navCtrl: NavController) {
    this.list = [{ title: 'Settings', component: ModalDetailPage }]
  }

  async open(objeto: any) {
    // return this.navCtrl.push(objeto.component)
  }
}
