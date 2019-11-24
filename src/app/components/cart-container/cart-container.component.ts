import { RemoveCartItem } from '@events/remove-cart-item.command';
import { CartItem } from '@models/cart-item.model';
import { CartService } from '@services/cart.service';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.scss']
})
export class CartContainerComponent implements OnInit {
  public cartItems$: Observable<CartItem[]>;
  public total: number;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems$ = this.cartService.getCartItems();
    this.total = this.cartService.calculateSumTotal();
  }

  public onRemoveCartItem(command: RemoveCartItem) {
    this.cartService.removeCartItem(command.cartItem);
    this.cartItems$ = this.removeInView(command.cartItem);
    this.total = this.cartService.calculateSumTotal();
    this.cartService.updateCart();
  }

  private removeInView(cartItem: CartItem): Observable<CartItem[]> {
    return this.cartItems$.pipe(
      map(items => items.filter(item => item.book.id !== cartItem.book.id))
    );
  }
}
