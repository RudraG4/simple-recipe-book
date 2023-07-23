import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    { name: 'Flour', amount: 10 },
    { name: 'Cheese', amount: 1 },
    { name: 'Tomato', amount: 4 },
  ];
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    if (ingredient) {
      this._addIngrediants([ingredient]);
    }
  }

  addIngredients(ingredients: Ingredient[]) {
    this._addIngrediants(ingredients);
  }

  private _addIngrediants(ingredients: Ingredient[]) {
    if (ingredients?.length) {
      const ingredientMap = Object.fromEntries(
        this.ingredients.map((ingredient) => [ingredient.name, ingredient])
      );
      ingredients.forEach((ingredient) => {
        if (ingredientMap[ingredient.name]) {
          ingredientMap[ingredient.name].amount += ingredient.amount;
        } else {
          ingredientMap[ingredient.name] = { ...ingredient };
        }
      });
      this.ingredients = [...Object.values(ingredientMap)];
      this.ingredientsChanged.emit(this.ingredients.slice());
    }
  }
}
