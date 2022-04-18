import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExercPersonPageRoutingModule } from './exerc-person-routing.module';

import { ExercPersonPage } from './exerc-person.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExercPersonPageRoutingModule
  ],
  declarations: [ExercPersonPage]
})
export class ExercPersonPageModule {}
