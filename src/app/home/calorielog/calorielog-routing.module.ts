import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalorielogPage } from './calorielog.page';

const routes: Routes = [
  {
    path: '',
    component: CalorielogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalorielogPageRoutingModule {}
