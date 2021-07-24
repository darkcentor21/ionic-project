import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChestPage } from './chest.page';
import { ChestinfoComponent } from './chestinfo/chestinfo.component';

const routes: Routes = [
  {
    path: '',
    component: ChestPage
  },
  {
    path:'info/:id',
    component:ChestinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChestPageRoutingModule {}
