import {  Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService{
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe(
      'Pressure Cooker Chicken with Chickpeas, Tomatoes, and Chorizo',
      "The secret to this recipe is the addition of canned fire-roasted tomatoes, which add lots of flavor with hardly any effort. We bolster the dish's savory side with Spanish chorizo and smoked paprika and add in chicken and canned chickpeas for a dinner that's as hearty as it is easy",
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
      [
        new Ingredient('Chorizo', 8),
        new Ingredient('Parsley Leaves', 1),
        new Ingredient('Sherry Vinegar', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
        new Ingredient('Chicken', 1),
        new Ingredient('Chicken Stock', 1),
        new Ingredient('Onion', 1),
        new Ingredient('Spanish Paprika', 1),
        new Ingredient('Chickpeas', 2),
        new Ingredient('Olive Oil', 1),
      ])
    ,new Recipe(
      'Salmon Roasted in Butter',
      "This simple fish dish is best made with wild salmon, but it works equally well with the farmed sort. It's astonishingly easy. In a hot oven, melt butter in a skillet until it sizzles, add the salmon, flip, remove the skin, then allow to roast a few minutes more. You'll have an elegant fish dinner in about 15 minutes. Don't be afraid to play with herb and fat combinations: parsley, chervil or dill work well with butter; thyme, basil or marjoram with olive oil; or peanut oil with cilantro or mint.",
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
      [
        new Ingredient('Salmon Fillet', 1),
        new Ingredient('Dill', 1),
        new Ingredient('Butter', 1),
        new Ingredient('Salt', 1),
        new Ingredient('Pepper', 1),
        new Ingredient('Lemon', 1),
      ])
  ];

  constructor(private slService: ShoppingListService ) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients)
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe)
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice());
  }



}
