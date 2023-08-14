import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeService } from './recipe.service';
import { AppDirectives } from '../shared/directives/app-directives.module';
import { RecipeRoutingModule } from './recipes-routing.module';
import { RecipeDetailPlaceholderComponent } from './recipe-detail-placeholder/recipe-detail-placeholder.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeDetailPlaceholderComponent,
    RecipeEditComponent,
  ],
  imports: [CommonModule, AppDirectives, RecipeRoutingModule],
  exports: [RecipesComponent],
  providers: [RecipeService],
})
export class RecipesModule {}
