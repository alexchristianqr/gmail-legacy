import { Component } from '@angular/core'

@Component({
  selector: 'page-mails-sent',
  templateUrl: 'list-sent.html',
})
export class MailsSentPage {
  constructor() {
    console.log('[MailsSentPage.constructor]')
  }

  async fnViewDetail() {}

  async fnViewSearch() {}

  async fnViewCreate() {}

  fnFetch() {}

  async fnClean() {}

  async presentPopover(myEvent: any) {}
}
