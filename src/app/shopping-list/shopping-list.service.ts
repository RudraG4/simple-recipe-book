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
    const index = this.ingredients.findIndex(
      (ing) => ing.name.toLowerCase() == ingredient.name.toLowerCase()
    );
    if (index > -1) {
      this.ingredients[index].amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
    this.ingredientsChanged.emit(this.ingredients);
  }
}
