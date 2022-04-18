import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitoIntPageRoutingModule } from './circuito-int-routing.module';

import { CircuitoIntPage } from './circuito-int.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitoIntPageRoutingModule
  ],
  declarations: [CircuitoIntPage]
})
export class CircuitoIntPageModule {}
