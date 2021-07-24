import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsPage } from './abs.page';
import { AbsinfoComponent } from './absinfo/absinfo.component';

const routes: Routes = [
  {
    path: '',
    component: AbsPage
  },
  {
    path:'info/:id',
    component:AbsinfoComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsPageRoutingModule {}
