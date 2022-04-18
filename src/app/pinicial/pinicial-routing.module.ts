import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinicialPage } from './pinicial.page';

const routes: Routes = [
  {
    path: '',
    component: PinicialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinicialPageRoutingModule {}
