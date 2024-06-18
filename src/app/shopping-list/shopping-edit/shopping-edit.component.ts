import { Component,EventEmitter,Output,ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('namedInput') namedInput:any;
  @ViewChild('amountInput') amountInput:any;
  @Output() indegredientAdded = new EventEmitter<Ingredient>()

  addIndegriendents(){
    const name = this.namedInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    const newIndegreident = new Ingredient(name,amount);
    this.indegredientAdded.emit(newIndegreident)
  }

}
