import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerEventosPageRoutingModule } from './ver-eventos-routing.module';

import { VerEventosPage } from './ver-eventos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerEventosPageRoutingModule
  ],
  declarations: [VerEventosPage]
})
export class VerEventosPageModule {}
