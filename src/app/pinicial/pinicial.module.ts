import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinicialPageRoutingModule } from './pinicial-routing.module';

import { PinicialPage } from './pinicial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinicialPageRoutingModule
  ],
  declarations: [PinicialPage]
})
export class PinicialPageModule {}
