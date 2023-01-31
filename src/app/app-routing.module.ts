import { Component, NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

import { DetailPage } from './inbox/detail/detail'
import { ModalSettingsDetail } from './inbox/detail/layouts/modal-settings-detail'

import { CreatePage } from './create/create'
import { ModalSettingsCreate } from './create/layouts/modal-settings-create'

import { MailsInboxPage } from './inbox/list/list-inbox'
import { ModalSettingsListInbox } from './inbox/list/layouts/modal-settings-list-inbox'

import { SearchPage } from './shared/search/search'
import { MailsSentPage } from './sent/list/list-sent'
import { HomePage } from './shared/home/home'
import { GeneralPage } from './shared/general/general'

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
  // DETALLE DEL MENSAJE
  {
    path: 'inbox-detail',
    component: DetailPage,
  },
  {
    title: 'Configuración',
    path: 'inbox-detail-settings',
    component: ModalSettingsDetail,
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
