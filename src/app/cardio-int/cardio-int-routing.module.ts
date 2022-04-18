import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardioIntPage } from './cardio-int.page';

const routes: Routes = [
  {
    path: '',
    component: CardioIntPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardioIntPageRoutingModule {}
