import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutsPageRoutingModule } from './workouts-routing.module';

import { WorkoutsPage } from './workouts.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutsPageRoutingModule
  ],
  declarations: [WorkoutsPage]
})
export class WorkoutsPageModule {}
