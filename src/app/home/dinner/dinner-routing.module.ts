import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinnerPage } from './dinner.page';

const routes: Routes = [
  {
    path: '',
    component: DinnerPage
  },  {
    path: 'recipe',
    loadChildren: () => import('./recipe/recipe.module').then( m => m.RecipePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinnerPageRoutingModule {}
