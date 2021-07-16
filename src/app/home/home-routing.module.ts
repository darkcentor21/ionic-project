import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'log',
        loadChildren: () => import('./log/log.module').then( m => m.LogPageModule)
      },
      {
        path: 'workouts',
        loadChildren: () => import('./workouts/workouts.module').then( m => m.WorkoutsPageModule)
      },
      {
        path: 'recipes',
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
      }
    ]
  },
  {
    path:'',
    redirectTo:'home/log',
    pathMatch:'full',
  },
  {
    path: 'arms',
    loadChildren: () => import('./arms/arms.module').then( m => m.ArmsPageModule)
  },  {
    path: 'back',
    loadChildren: () => import('./back/back.module').then( m => m.BackPageModule)
  },
  {
    path: 'chest',
    loadChildren: () => import('./chest/chest.module').then( m => m.ChestPageModule)
  },
  {
    path: 'abs',
    loadChildren: () => import('./abs/abs.module').then( m => m.AbsPageModule)
  },
  {
    path: 'leg',
    loadChildren: () => import('./leg/leg.module').then( m => m.LegPageModule)
  }




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
