import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForcaIntPageRoutingModule } from './forca-int-routing.module';

import { ForcaIntPage } from './forca-int.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForcaIntPageRoutingModule
  ],
  declarations: [ForcaIntPage]
})
export class ForcaIntPageModule {}
