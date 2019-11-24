import { Observable, of } from "rxjs";
import { Injectable, EventEmitter } from "@angular/core";
import { CartItem } from "@models/cart-item.model";
import { CommonService } from "@services/common.service";

@Injectable({
  providedIn: "root"
})
export class CartService {
  private cartItems: CartItem[] = [];
  private displayCartEvent: EventEmitter<CartItem[]> = new EventEmitter();

  constructor(private commonService: CommonService) {}

  public get cartEventEmitter() {
    return this.displayCartEvent;
  }

  public consumerEvent(consumer) {
    this.displayCartEvent.subscribe(cartItems => consumer(cartItems));
  }

  public addCartItem(cartItem: CartItem) {
    const existingCartItem = this.findExistingItemInCart(cartItem);
    if (existingCartItem) {
      existingCartItem.bookedQuantity = this.addExistingCartItemIntoCart(
        existingCartItem,
        cartItem.bookedQuantity
      );
      existingCartItem.lineTotal = this.calculateCartItemLineTotal(
        existingCartItem
      );
    } else {
      this.addNewCartItemIntoCart(cartItem);
      cartItem.lineTotal = this.calculateCartItemLineTotal(cartItem);
    }
  }

  public updateCartEmitter() {
    return this.displayCartEvent.emit(this.cartItems);
  }

  public updateCart() {
    this.displayCartEvent.emit(this.cartItems);
  }

  public removeCartItem(cartItem: CartItem) {
    this.cartItems = this.cartItems.filter(
      (item: CartItem) => item.book.id !== cartItem.book.id
    );
  }

  public checkoutShoppingCart() {}

  private addExistingCartItemIntoCart(existingCartItem: CartItem, qty: number) {
    return existingCartItem.bookedQuantity + qty;
  }

  private addNewCartItemIntoCart(cartItem: CartItem) {
    this.cartItems = [...this.cartItems, cartItem];
  }

  private updateExistingCartItemIntoCart(
    existingCartItem: CartItem,
    qty: number
  ) {
    existingCartItem.bookedQuantity = qty;
  }

  private findExistingItemInCart(cartItem: CartItem) {
    const existingItems =
      this.cartItems.filter(
        itemInCart => itemInCart.book.id === cartItem.book.id
      ) || [];
    if (existingItems.length > 0) {
      return existingItems.pop();
    }
    return null;
  }

  private calculateCartItemLineTotal(cartItem: CartItem) {
    return cartItem.book.price * cartItem.bookedQuantity;
  }

  public calculateSumTotal(): number {
    let sum = 0;
    this.cartItems.forEach(
      (cartItem: CartItem) => (sum = sum + cartItem.lineTotal)
    );

    return sum;
  }

  private calculateTotal() {
    let total = 0;
    this.cartItems.forEach((cartItem: CartItem) => {
      total = total + cartItem.lineTotal;
    });

    return total;
  }

  public getCartItems(): Observable<CartItem[]> {
    return of(this.cartItems);
  }
}
