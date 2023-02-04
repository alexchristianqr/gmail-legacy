import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { MyPopover } from '../../../core/types/MyPopover'

@Component({
  selector: 'page-popover-detail',
  templateUrl: 'popover-detail.html',
})
export class PopoverDetailPage {
  items: Array<MyPopover>

  constructor(private router: Router) {
    console.log('[PopoverDetailPage.constructor]')

    this.items = [{ title: 'Settings', path: 'inbox-detail-settings' }]
  }

  async open(payload: MyPopover) {
    console.log('[PopoverDetailPage.open]')

    await this.router.navigate([payload.path])
  }
}
