import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dificuldade3PageRoutingModule } from './dificuldade3-routing.module';

import { Dificuldade3Page } from './dificuldade3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dificuldade3PageRoutingModule
  ],
  declarations: [Dificuldade3Page]
})
export class Dificuldade3PageModule {}
