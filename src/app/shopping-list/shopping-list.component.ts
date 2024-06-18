import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient("test",10),
    new Ingredient("test1",20),
  ]

  onIndegredientAdded(ingredient:Ingredient){
    this.ingredients.push(ingredient)
  }
}
