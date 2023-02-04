import { Component } from '@angular/core'
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

    this.items = [{ title: 'Settings', path: 'create-settings' }]
  }

  async open(payload: MyPopover) {
    console.log('[PopoverCreatePage.open]')

    await this.router.navigate([payload.path])
  }
}
