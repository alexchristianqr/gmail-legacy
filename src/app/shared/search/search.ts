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
  myDatabase: string = 'DATABASE_INBOX'

  constructor(private httpService: HttpServiceProvider, private storage: Storage, private router: Router) {
    this.getState()
  }

  ngOnInit(): void {
    this.httpService.loadPreferences(this.myDatabase)
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
        if (!res) return
        //   if (value.toLowerCase().length == 0) {
        //     return (this.items = [])
        //   } else {
        this.items = res.filter((value: any) => {
          return (
            value.name.toLowerCase().indexOf(textSearch.toLowerCase()) > -1 ||
            value.subject.toLowerCase().indexOf(textSearch.toLowerCase()) > -1 ||
            value.message.toLowerCase().indexOf(textSearch.toLowerCase()) > -1
          )
        })
        //   }
        // }
      })
      .catch((error) => {
        console.error(error)
      })
  }
}
