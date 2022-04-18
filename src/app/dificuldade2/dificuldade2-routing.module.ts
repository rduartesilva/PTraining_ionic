import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dificuldade2Page } from './dificuldade2.page';

const routes: Routes = [
  {
    path: '',
    component: Dificuldade2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dificuldade2PageRoutingModule {}
