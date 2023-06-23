import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  product = {
    name: 'Product 1',
    price: 100,
    quantity: 1
  };

  constructor(private cartService: CartService) { }

  addToCart(product :any) {
    this.cartService.addToCart(product).subscribe(() => {
      console.log('Added to cart');
    });
  }
}
