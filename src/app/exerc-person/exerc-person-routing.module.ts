import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExercPersonPage } from './exerc-person.page';

const routes: Routes = [
  {
    path: '',
    component: ExercPersonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExercPersonPageRoutingModule {}
