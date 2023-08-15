import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent {
  recipe$!: Observable<Recipe>;

  constructor(
    private recipeService: RecipeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.recipe$ = this.recipeService.getRecipeById(+params['id']);
    });
  }

  addToShoppingList(recipe: Recipe) {
    this.recipeService.addIngredientsToShoppingList(recipe.ingredients);
  }

  editRecipe(recipe: Recipe) {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute });
  }
}
