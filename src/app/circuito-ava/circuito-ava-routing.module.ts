import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CircuitoAvaPage } from './circuito-ava.page';

const routes: Routes = [
  {
    path: '',
    component: CircuitoAvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CircuitoAvaPageRoutingModule {}
