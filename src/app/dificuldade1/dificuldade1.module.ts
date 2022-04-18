import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dificuldade1PageRoutingModule } from './dificuldade1-routing.module';

import { Dificuldade1Page } from './dificuldade1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dificuldade1PageRoutingModule
  ],
  declarations: [Dificuldade1Page]
})
export class Dificuldade1PageModule {}
