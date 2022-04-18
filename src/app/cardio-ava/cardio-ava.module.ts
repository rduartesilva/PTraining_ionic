import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardioAvaPageRoutingModule } from './cardio-ava-routing.module';

import { CardioAvaPage } from './cardio-ava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardioAvaPageRoutingModule
  ],
  declarations: [CardioAvaPage]
})
export class CardioAvaPageModule {}
