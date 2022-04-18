import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitoIntPage } from './circuito-int.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitoIntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitoIntPageRoutingModule {}
