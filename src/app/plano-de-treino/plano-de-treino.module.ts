import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanoDeTreinoPageRoutingModule } from './plano-de-treino-routing.module';

import { PlanoDeTreinoPage } from './plano-de-treino.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanoDeTreinoPageRoutingModule
  ],
  declarations: [PlanoDeTreinoPage]
})
export class PlanoDeTreinoPageModule {}
