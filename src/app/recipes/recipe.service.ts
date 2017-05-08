import { EventEmitter } from '@angular/core'

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model'

export class RecipeService{
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Pressure Cooker Chicken with Chickpeas, Tomatoes, and Chorizo',
      "The secret to this recipe is the addition of canned fire-roasted tomatoes, which add lots of flavor with hardly any effort. We bolster the dish's savory side with Spanish chorizo and smoked paprika and add in chicken and canned chickpeas for a dinner that's as hearty as it is easy",
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('meat', 1),
        new Ingredient('cheese', 1),
      ])
    ,new Recipe(
      'Salmon Roasted in Butter',
      "This simple fish dish is best made with wild salmon, but it works equally well with the farmed sort. It's astonishingly easy. In a hot oven, melt butter in a skillet until it sizzles, add the salmon, flip, remove the skin, then allow to roast a few minutes more. You'll have an elegant fish dinner in about 15 minutes. Don't be afraid to play with herb and fat combinations: parsley, chervil or dill work well with butter; thyme, basil or marjoram with olive oil; or peanut oil with cilantro or mint.",
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
      [
        new Ingredient('fish', 1),
        new Ingredient('butter', 1),
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
