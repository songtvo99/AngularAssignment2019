import { Injectable, EventEmitter } from '@angular/core';
import { CartItem } from '@models/cart-item.model';
import { CommonService } from '@services/common.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private displayCartEvent: EventEmitter<CartItem[]> = new EventEmitter();

  constructor(private commonService: CommonService) { }

  public addCartItem(cartItem: CartItem) {
    const existingItems =
      this.cartItems
            .filter(itemInCart => itemInCart.bookId === cartItem.bookId) || [];

    if (existingItems.length > 0) {
      const existingItem = existingItems.pop();
      existingItem.bookedQuantity = existingItem.bookedQuantity
                                                + cartItem.bookedQuantity;
    } else {
      this.cartItems = [...this.cartItems, cartItem];
    }
  }

  public updateCart() {
    this.displayCartEvent.emit(this.cartItems);
  }

  public removeCartItem(cartItem: CartItem) {

  }

  public makeOrderItem() {

  }

}
