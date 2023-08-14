import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Chorizo & mozzarella gnocchi bake',
      'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=375,341',
      [new Ingredient('Ing1', 10), new Ingredient('Ing2', 1)]
    ),
    new Recipe(
      2,
      'Potato hash with greens',
      'Achieve three of your five-a-day with our potato hash. Peppers are packed with vitamin C and spinach is rich in iron – a great combo with hearty potatoes',
      'https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Potato-Hash-With-Greens-440x400-7362ceb.jpg?quality=90&webp=true&resize=375,341',
      [new Ingredient('Ing3', 5), new Ingredient('Ing4', 3)]
    ),
    new Recipe(
      3,
      'Chorizo & mozzarella gnocchi bake',
      'Upgrade cheesy tomato pasta with gnocchi, chorizo and mozzarella for a comforting bake that makes an excellent midweek meal',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/gnocchi-1d16725.jpg?quality=90&webp=true&resize=375,341',
      [new Ingredient('Ing1', 10), new Ingredient('Ing2', 1)]
    ),
    new Recipe(
      4,
      'Potato hash with greens',
      'Achieve three of your five-a-day with our potato hash. Peppers are packed with vitamin C and spinach is rich in iron – a great combo with hearty potatoes',
      'https://images.immediate.co.uk/production/volatile/sites/30/2023/05/Potato-Hash-With-Greens-440x400-7362ceb.jpg?quality=90&webp=true&resize=375,341',
      [new Ingredient('Ing3', 5), new Ingredient('Ing4', 3)]
    ),
  ];
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    const recipeItem = this.recipes.find((recipe) => recipe.id === id);
    return recipeItem ? { ...recipeItem } : recipeItem;
  }

  addRecipe(recipe: Recipe) {
    if (recipe) {
      this.recipes.push(recipe);
    }
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
