import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BackPage } from './back.page';
import { BackinfoComponent } from './backinfo/backinfo.component';

const routes: Routes = [
  {
    path: '',
    component: BackPage
  },
  {
    path:'info/:id',
    component:BackinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BackPageRoutingModule {}
