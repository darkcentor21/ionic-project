import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)

  },
  {
    path:'log',
    loadChildren:'./home/log/log.LogPageModule'
  },
  {
    path:'exercises',
    loadChildren:'./home/workouts/workouts.WorkoutsPageModule '
  },
  {
    path: 'recipe',
    loadChildren:'./home/recipe/recipe/RecipePageModule'
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
