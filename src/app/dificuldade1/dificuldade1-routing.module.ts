import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dificuldade1Page } from './dificuldade1.page';

const routes: Routes = [
  {
    path: '',
    component: Dificuldade1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dificuldade1PageRoutingModule {}
