import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForcaPage } from './forca.page';

const routes: Routes = [
  {
    path: '',
    component: ForcaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ForcaPageRoutingModule {}
