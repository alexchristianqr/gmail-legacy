import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { DetailPage } from './detail/detail'
import { SearchPage } from './search/search'
import { CreatePage } from './create/create'
import { MailsSentPage } from './mails-sent/mails-sent'
import { ModalMailPage } from './mail/modal-mail'
import { HomePage } from './home/home'
import { ModalDetailPage } from './detail/modal-detail'
import { PopoverMailPage } from './mail/popover-mail'
import { ModalCreatePage } from './create/modal-create'
import { MailsInboxPage } from './mails-inbox/mails-inbox'
import { PopoverCreatePage } from './create/popover-create'
import { GeneralPage } from './general/general'
import { PopoverDetailPage } from './detail/popover-detail'

const routes: Routes = [
  {
    path: 'inbox',
    component: MailsInboxPage,
    children: [
      {
        path: 'detail',
        component: ModalDetailPage,
        // loadChildren: () => PopoverDetailPage,
      },
      // {
      //   path: 'create',
      //   component: CreatePage,
      //   // loadChildren: () => CreatePage,
      // },
    ],
  },
  {
    path: 'create',
    component: CreatePage,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
