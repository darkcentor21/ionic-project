import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmsPage } from './arms.page';
import { InfoComponent } from './info/info.component';


const routes: Routes = [
  {
    path: '',
    component: ArmsPage
  }, 
  {
    path:'info/:id',
    component:InfoComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmsPageRoutingModule {}
