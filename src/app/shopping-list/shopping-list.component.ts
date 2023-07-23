import { Component } from '@angular/core';
import { Ingredient } from '../shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    { name: 'Flour', amount: 10 },
    { name: 'Cheese', amount: 1 },
    { name: 'Tomato', amount: 4 },
  ];

  onIngredientAdd(ingredient: Ingredient) {
    const index = this.ingredients.findIndex(
      (ing) => ing.name.toLowerCase() == ingredient.name.toLowerCase()
    );
    if (index > -1) {
      this.ingredients[index].amount += ingredient.amount;
    } else {
      this.ingredients.push(ingredient);
    }
  }
}
