import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from "../recipe";
import { RecipeItemComponent } from "./recipe-item.component";
@Component({
  moduleId: module.id,
  selector: 'rb-recipes-list',
  templateUrl: 'recipes-list.component.html',
 directives: [RecipeItemComponent]
})
export class RecipesListComponent {
 recipes : Recipe[] = [];
 @Output() recipeSelected = new EventEmitter();
 recipe = new Recipe('Dummy', 'Dummy','https://www.theurbanlist.com/content/general/My-Food-Bag-Nadia-Lim-Healthy-Lamb-Auckland-v2.jpg');
 onSelected(recipe : Recipe){
   this.recipeSelected.emit(recipe);
 }
}
