import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardioAvaPage } from './cardio-ava.page';

const routes: Routes = [
  {
    path: '',
    component: CardioAvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardioAvaPageRoutingModule {}
