import { Ingredient } from '../shared/models/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [];

  constructor() {
    this.ingredients = this.loadLocalData();
  }

  getIngredients() {
    this.ingredients = this.loadLocalData();
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
      this.setLocalData(this.ingredients);
    }
  }

  private loadLocalData() {
    let localDataString = localStorage.getItem('recipe-shopping-list');
    if (!localDataString) {
      localStorage.setItem('recipe-shopping-list', JSON.stringify([]));
    }
    const localIngredientsData: Ingredient[] = JSON.parse(
      localStorage.getItem('recipe-shopping-list') || '[]'
    );
    return localIngredientsData;
  }

  private setLocalData(data: Ingredient[]) {
    localStorage.setItem('recipe-shopping-list', JSON.stringify(data));
  }
}
