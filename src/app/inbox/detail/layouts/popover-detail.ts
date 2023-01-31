import { Component } from '@angular/core'
import { Storage } from '@ionic/storage'
import { Router } from '@angular/router'

type MyPopover = {
  title: string
  path: string | null
}

@Component({
  selector: 'page-popover-detail',
  templateUrl: 'popover-detail.html',
})
export class PopoverDetailPage {
  list: Array<MyPopover>

  constructor(public storage: Storage, public router: Router) {
    this.list = [{ title: 'Settings', path: 'inbox-detail-settings' }]
  }

  async open(payload: MyPopover) {
    await this.router.navigate([payload.path])
  }
}
