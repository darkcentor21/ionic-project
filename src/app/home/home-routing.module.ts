import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path: 'exercise',
        loadChildren: () => import('./exercise/exercise.module').then( m => m.ExercisePageModule)
      },
      {
        path: 'calorielog',
        loadChildren: () => import('./calorielog/calorielog.module').then( m => m.CalorielogPageModule)
      },
      {
        path: 'recipes',
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
      },
      {
        path:'',
        redirectTo:'home/calorielog',
        pathMatch:'full'
      

      }

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
