import { Component } from '@angular/core'
import { ModalController, NavController, ViewController } from 'ionic-angular'
import { ModalMailPage } from './modal-mail'

@Component({
  selector: 'page-popover-mail',
  templateUrl: 'popover-mail.html',
})
export class PopoverMailPage {
  list: Array<{ title: string; component: any }>

  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, public navCtrl: NavController) {
    this.list = [{ title: 'Settings', component: ModalMailPage }]
  }

  async open(objeto) {
    await this.navCtrl.push(objeto.component)
  }
}
