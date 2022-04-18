import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForcaPageRoutingModule } from './forca-routing.module';

import { ForcaPage } from './forca.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForcaPageRoutingModule
  ],
  declarations: [ForcaPage]
})
export class ForcaPageModule {}
