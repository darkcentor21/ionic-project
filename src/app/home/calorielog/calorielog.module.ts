import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalorielogPageRoutingModule } from './calorielog-routing.module';

import { CalorielogPage } from './calorielog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalorielogPageRoutingModule
  ],
  declarations: [CalorielogPage]
})
export class CalorielogPageModule {}
