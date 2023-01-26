/**
 * Created by aquispe on 26/11/2017.
 */
import { Component } from '@angular/core'
import { ModalController, ViewController } from 'ionic-angular'
import { ModalDetailPage } from './modal-detail'

@Component({
  selector: 'page-popover-detail',
  templateUrl: 'popover-detail.html',
})
export class PopoverDetailPage {
  list: Array<{ title: string; component: any }>

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.list = [{ title: 'Settings', component: ModalDetailPage }]
  }

  async open(objeto) {
    await this.viewCtrl.dismiss()
    return this.modalCtrl.create(objeto.component).present()
  }
}
