import { Component, OnInit } from '@angular/core';
import { RecipesListComponent } from "./recipes-list";
import { RecipeDetailComponent } from "./recipe-detail";
import { Recipe } from "./recipe";
@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipesListComponent,RecipeDetailComponent]
})
export class RecipesComponent  {
  selectedRecipe : Recipe;

}
