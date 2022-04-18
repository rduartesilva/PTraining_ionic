import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CircuitoAvaPageRoutingModule } from './circuito-ava-routing.module';

import { CircuitoAvaPage } from './circuito-ava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CircuitoAvaPageRoutingModule
  ],
  declarations: [CircuitoAvaPage]
})
export class CircuitoAvaPageModule {}
