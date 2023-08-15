import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeDetailPlaceholderComponent } from './recipe-detail-placeholder/recipe-detail-placeholder.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    component: RecipesComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: RecipeDetailPlaceholderComponent,
      },
      { path: 'new', component: RecipeEditComponent, title: 'New Recipe' },
      { path: ':id', component: RecipeDetailComponent, title: 'Recipe Detail' },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        title: 'Recipe Edit',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
