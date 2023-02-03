import { Component } from '@angular/core'

@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {
  constructor() {
    console.log('[GeneralPage.constructor]')
  }
}
