import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() onClickHeaderEvent = new EventEmitter();
  collapsed:boolean = true;

  onClickHeader(event:any){
    this.onClickHeaderEvent.emit(event.target.innerHTML)
  }
}
