import { EventEmitter } from '@angular/core'

import { Recipe } from './recipe.model'

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test','this is a test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
    ,new Recipe('Another Test','this is a test', 'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
