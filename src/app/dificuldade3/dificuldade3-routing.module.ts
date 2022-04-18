import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dificuldade3Page } from './dificuldade3.page';

const routes: Routes = [
  {
    path: '',
    component: Dificuldade3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Dificuldade3PageRoutingModule {}
