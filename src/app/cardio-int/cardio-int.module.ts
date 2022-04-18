import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardioIntPageRoutingModule } from './cardio-int-routing.module';

import { CardioIntPage } from './cardio-int.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardioIntPageRoutingModule
  ],
  declarations: [CardioIntPage]
})
export class CardioIntPageModule {}
