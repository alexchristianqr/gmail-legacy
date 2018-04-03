/**
 * Created by aquispe on 26/11/2017.
 */
import { Component } from '@angular/core'
import { ModalController, ViewController } from 'ionic-angular'
import { ModalMailPage } from './modal-mail'

@Component({
  selector: 'page-popover-mail',
  templateUrl: 'popover-mail.html',
})
export class PopoverMailPage {

  list: Array<{ title: string, component: any }>

  constructor (
      public viewCtrl: ViewController, public modalCtrl: ModalController) {
    this.list = [
      {title: 'Settings', component: ModalMailPage},
    ]
  }

  open (objeto) {
    this.viewCtrl.dismiss();
    (this.modalCtrl.create(objeto.component)).present()
  }

}