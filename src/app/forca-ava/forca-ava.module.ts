import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForcaAvaPageRoutingModule } from './forca-ava-routing.module';

import { ForcaAvaPage } from './forca-ava.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForcaAvaPageRoutingModule
  ],
  declarations: [ForcaAvaPage]
})
export class ForcaAvaPageModule {}
