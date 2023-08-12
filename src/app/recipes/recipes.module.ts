import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeService } from './recipe.service';
import { AppDirectives } from '../shared/directives/app-directives.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
  ],
  imports: [
    CommonModule,
    AppDirectives,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RecipesComponent },
    ]),
  ],
  exports: [RecipesComponent],
  providers: [RecipeService],
})
export class RecipesModule {}
