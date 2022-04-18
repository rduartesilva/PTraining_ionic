import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForcaAvaPage } from './forca-ava.page';

const routes: Routes = [
  {
    path: '',
    component: ForcaAvaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcaAvaPageRoutingModule {}
