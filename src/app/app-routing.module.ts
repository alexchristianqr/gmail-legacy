import { Component, NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { DetailPage } from './inbox/detail/detail'
import { SearchPage } from './shared/search/search'
import { CreatePage } from './create/create'
import { MailsSentPage } from './sent/list/list-sent'
import { ModalSettingsListInbox } from './inbox/list/layouts/modal-settings-list-inbox'
import { HomePage } from './shared/home/home'
import { ModalSettingsDetail } from './inbox/detail/layouts/modal-settings-detail'
import { PopoverMailPage } from './inbox/list/layouts/popover-list-inbox'
import { ModalSettingsCreate } from './create/layouts/modal-settings-create'
import { MailsInboxPage } from './inbox/list/list-inbox'
import { PopoverCreatePage } from './create/layouts/popover-create'
import { GeneralPage } from './shared/general/general'
import { PopoverDetailPage } from './inbox/detail/layouts/popover-detail'

const routes: Routes = [
  // BANDEJA DE ENTRADA
  {
    path: 'inbox',
    component: MailsInboxPage,
  },
  {
    title: 'Configuración',
    path: 'inbox-settings',
    component: ModalSettingsListInbox,
  },
  // NUEVO MENSAJE
  {
    path: 'create',
    component: CreatePage,
  },
  {
    title: 'Configuración',
    path: 'create-settings',
    component: ModalSettingsCreate,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
