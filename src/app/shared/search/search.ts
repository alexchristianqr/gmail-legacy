import { Component, OnInit } from '@angular/core'
import { Storage } from '@ionic/storage'
import { HttpServiceProvider } from '../../../providers/http-service/http-service'
import { Router } from '@angular/router'
import { MyMessage } from '../../core/types/MyMessage'
import { MyParams } from '../../core/types/MyParams'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage implements OnInit {
  data: MyParams | any
  items: Array<MyMessage> = []

  constructor(private httpService: HttpServiceProvider, private storage: Storage, private router: Router) {
    this.getState()
  }

  ngOnInit(): void {
    this.httpService.loadPreferences(this)
    this.getState()
  }

  getState(): void {
    this.data = this.router.getCurrentNavigation()?.extras.state
  }

  async back() {
    await this.router.navigate([this.data.path])
  }

  async fnViewDetail(item: MyMessage) {
    const data: MyParams = { item: item, path: 'search' }
    await this.router.navigate(['inbox-detail'], { state: data })
  }

  async getItems(event: any) {
    const textSearch = event.target.value
    if (!textSearch) return
    await this.storage.set('text_search', textSearch)

    this.items = []
    return this.storage
      .get(this.data.database)
      .then((res: Array<MyMessage>) => {
        console.log({ res })
        if (!res) return
        //   if (value.toLowerCase().length == 0) {
        //     return (this.items = [])
        //   } else {
        // @ts-ignore
        this.items = res.filter((value: MyMessage, index: number, test) => {
          if (
            value.name.toLowerCase().indexOf(textSearch.toLowerCase()) > -1 ||
            value.subject.toLowerCase().indexOf(textSearch.toLowerCase()) > -1 ||
            value.message.toLowerCase().indexOf(textSearch.toLowerCase()) > -1
          ) {
            return true
          }
        })
        //   }
        // }
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
