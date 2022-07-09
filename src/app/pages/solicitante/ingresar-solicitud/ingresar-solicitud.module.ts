import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresarSolicitudPageRoutingModule } from './ingresar-solicitud-routing.module';

import { IngresarSolicitudPage } from './ingresar-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresarSolicitudPageRoutingModule
  ],
  declarations: [IngresarSolicitudPage]
})
export class IngresarSolicitudPageModule {}
