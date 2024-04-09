import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  standalone: true,
  imports: [],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss'
})
export class ItemsComponent {
  
  buttonText: string = 'Buy';
  inCart: boolean = false;

  addToCart() {
    this.buttonText = 'In Cart';
    this.inCart = true;
  }

}
