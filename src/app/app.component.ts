import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'recipe-app';
  showRecipeComp:boolean = false;
  showShoppingListComp:boolean = false;

  onClickHeader(target:string){
    if(target == 'Recipes'){
      this.showRecipeComp = true
      this.showShoppingListComp = false
    }else if(target == 'Shopping List'){
      this.showShoppingListComp = true
      this.showRecipeComp = false
    }
  }

  
}
