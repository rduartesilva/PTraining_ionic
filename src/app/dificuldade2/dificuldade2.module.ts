import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dificuldade2PageRoutingModule } from './dificuldade2-routing.module';

import { Dificuldade2Page } from './dificuldade2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dificuldade2PageRoutingModule
  ],
  declarations: [Dificuldade2Page]
})
export class Dificuldade2PageModule {}
