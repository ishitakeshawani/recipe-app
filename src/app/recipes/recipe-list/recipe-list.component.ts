import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('test1',"test desc","https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg?w=1060&t=st=1717058831~exp=1717059431~hmac=3e609f82b9025dfbf8c65f542f4902629d057eea819e00ccbdbbe96524483dff"),
    new Recipe('test2',"test desc","https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg?w=1060&t=st=1717058831~exp=1717059431~hmac=3e609f82b9025dfbf8c65f542f4902629d057eea819e00ccbdbbe96524483dff"),
    new Recipe('test3',"test desc","https://img.freepik.com/free-psd/3d-rendering-ui-icon_23-2149182289.jpg?w=1060&t=st=1717058831~exp=1717059431~hmac=3e609f82b9025dfbf8c65f542f4902629d057eea819e00ccbdbbe96524483dff")
  ];
  @Output() recipeWasSelected = new EventEmitter();

  onSelectRecipe(event:Recipe){
    this.recipeWasSelected.emit(event);
  }
}
