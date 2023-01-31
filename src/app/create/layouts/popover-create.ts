import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { ModalSettingsCreate } from './modal-settings-create'
import { Router } from '@angular/router'

type MyPopover = {
  title: string
  path: string
}

@Component({
  selector: 'page-popover-create',
  templateUrl: 'popover-create.html',
})
export class PopoverCreatePage {
  list: Array<MyPopover>

  constructor(public modalCtrl: ModalController, public router: Router) {
    this.list = [
      { title: 'Add Contacts', path: 'create-settings' },
      { title: 'Discard', path: 'create-settings' },
      { title: 'Settings', path: 'create-settings' },
      { title: 'Help', path: 'create-settings' },
    ]
  }

  async open(payload: MyPopover) {
    await this.router.navigate([payload.path])
  }
}
