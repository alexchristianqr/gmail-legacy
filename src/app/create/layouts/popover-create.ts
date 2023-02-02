import { Component } from '@angular/core'
import { ModalController } from '@ionic/angular'
import { Router } from '@angular/router'
import { MyPopover } from '../../core/types/MyPopover'

@Component({
  selector: 'page-popover-create',
  templateUrl: 'popover-create.html',
})
export class PopoverCreatePage {
  items: Array<MyPopover>

  constructor(private router: Router) {
    console.log('[PopoverCreatePage.constructor]')
    this.items = [
      { title: 'Add Contacts', path: 'create-settings' },
      { title: 'Discard', path: 'create-settings' },
      { title: 'Settings', path: 'create-settings' },
      { title: 'Help', path: 'create-settings' },
    ]
  }

  async open(payload: MyPopover) {
    console.log('[PopoverCreatePage.open]')
    await this.router.navigate([payload.path])
  }
}
