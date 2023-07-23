import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Ing1', 10), new Ingredient('Ing2', 1)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [new Ingredient('Ing3', 5), new Ingredient('Ing4', 3)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  addRecipe(recipe: Recipe) {
    if (recipe) {
      this.recipes.push(recipe);
    }
  }
}
