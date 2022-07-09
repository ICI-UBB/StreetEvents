import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerEventosPage } from './ver-eventos.page';

const routes: Routes = [
  {
    path: '',
    component: VerEventosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerEventosPageRoutingModule {}
