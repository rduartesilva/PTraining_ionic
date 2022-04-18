import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlanoDeTreinoPage } from './plano-de-treino.page';

const routes: Routes = [
  {
    path: '',
    component: PlanoDeTreinoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanoDeTreinoPageRoutingModule {}
