import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  { //????
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full' 
  },
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'main',
        loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
      },
      {
        path: 'publico/ver-eventos',
        loadChildren: () => import('../publico/ver-eventos/ver-eventos.module').then( m => m.VerEventosPageModule)
      },
      {
        path: 'solicitante/ingresar-solicitud',
        loadChildren: () => import('../solicitante/ingresar-solicitud/ingresar-solicitud.module').then( m => m.IngresarSolicitudPageModule)
      },
      {
        path: 'solicitante/ver-solicitudes',
        loadChildren: () => import('../solicitante/ver-solicitudes/ver-solicitudes.module').then( m => m.VerSolicitudesPageModule)
      },
      {
        path: 'asistente/ver-solicitudes',
        loadChildren: () => import('../asistente/ver-solicitudes/ver-solicitudes.module').then( m => m.VerSolicitudesPageModule)
      },
      {
        path: 'gobernador/ver-solicitudes',
        loadChildren: () => import('../gobernador/ver-solicitudes/ver-solicitudes.module').then( m => m.VerSolicitudesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
