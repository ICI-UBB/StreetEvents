import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresarSolicitudPage } from './ingresar-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: IngresarSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresarSolicitudPageRoutingModule {}
