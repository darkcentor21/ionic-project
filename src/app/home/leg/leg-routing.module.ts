import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LegPage } from './leg.page';

const routes: Routes = [
  {
    path: '',
    component: LegPage
  },
  {
    path:'info/:id'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LegPageRoutingModule {}
