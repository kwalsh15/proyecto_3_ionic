import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'recipe-steps/:id',
    loadChildren: () =>
      import('./recipe-steps/recipe-steps.module').then(
        (m) => m.RecipeStepsPageModule
      ),
  },
  {
    path: 'create-recipe',
    loadChildren: () => import('./create-recipe/create-recipe.module').then( m => m.CreateRecipePageModule)
  },
  {
    path: 'comments/:id',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
