import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutsPage } from './workouts.page';
import { ArmsPage } from '../arms/arms.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutsPage
  },
  {
    path:'abs',
    loadChildren: () => import('../abs/abs.module').then( m => m.AbsPageModule)
  },
  {
    path:'arms',
    loadChildren: () => import('../arms/arms.module').then( m => m.ArmsPageModule)
  },
  {
    path:'back',
    loadChildren: () => import('../back/back.module').then( m => m.BackPageModule)
  },
  {
    path:'chest',
    loadChildren: () => import('../chest/chest.module').then( m => m.ChestPageModule)
  },
  {
    path:'leg',
    loadChildren: () => import('../leg/leg.module').then( m => m.LegPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutsPageRoutingModule {}
