import { Order } from '@models/order.model';
import { AuthenticationService } from '@services/authentication.service';
import { ServerUrl } from './../constants/url-routing.constant';
import { HttpClient } from '@angular/common/http';
import { AppConstant } from '@constants/app.constant';
import { Injectable, EventEmitter } from '@angular/core';
import { CartItem } from '@models/cart-item.model';
import { OrderDetail } from '@models/order-detail.model';

import { CommonService } from '@services/common.service';

import { Observable, BehaviorSubject, of, forkJoin } from 'rxjs';
import { last, mergeMap, scan, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems$: BehaviorSubject<CartItem[]>;
  private displayCartEvent: EventEmitter<CartItem[]> = new EventEmitter();

  constructor(
    private commonService: CommonService,
    private authenticationService: AuthenticationService,
    private http: HttpClient
  ) {
    const cartItems =
      this.commonService.getLocalSessionValue(AppConstant.CART_ITEMS_KEY) || [];
    this.cartItems$ = new BehaviorSubject<CartItem[]>(cartItems);
  }

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
    return this.displayCartEvent.emit(this.cartItems$.value);
  }

  public updateCart() {
    this.displayCartEvent.emit(this.cartItems$.value);
  }

  public removeCartItem(cartItem: CartItem) {
    const items = this.cartItems$.value.filter(
      (item: CartItem) => item.book.id !== cartItem.book.id
    );
    this.cartItems$.next(items);
  }

  public checkoutShoppingCart(): Observable<any> {
    const order = this.buildOrder();
    return this.submitOrder(order);
  }

  public submitOrder(order: Order) {
    const checkOutUrl = ServerUrl.shopCart.checkout();
    return this.http.post<any>(checkOutUrl, order);
  }

  public buildOrder(): Order {
    const id = this.authenticationService.getCurrentUser().id;
    const orderDetails = this.convertCartItemToOrderDetail(
      this.cartItems$.value
    );
    const order = { userId: id, orderDetails };
    return order as Order;
  }

  public convertCartItemToOrderDetail(cartItems: CartItem[]): OrderDetail[] {
    return cartItems.map(item => {
      const { id, price } = item.book;
      const qty = item.bookedQuantity;
      return { bookId: id, price, qty } as OrderDetail;
    });
  }

  private addExistingCartItemIntoCart(existingCartItem: CartItem, qty: number) {
    return existingCartItem.bookedQuantity + qty;
  }

  private addNewCartItemIntoCart(cartItem: CartItem) {
    const items = this.cartItems$.value;
    this.cartItems$.next([...items, cartItem]);
  }

  private updateExistingCartItemIntoCart(
    existingCartItem: CartItem,
    qty: number
  ) {
    existingCartItem.bookedQuantity = qty;
  }

  private findExistingItemInCart(cartItem: CartItem) {
    const existingItems =
      this.cartItems$.value.filter(
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

  public calculateSumTotal(): Observable<number> {
    return this.cartItems$.pipe(
      mergeMap((items: CartItem[]) => items.map(item => item.lineTotal)),
      scan((sum, lineTotal) => sum + lineTotal, 0)
    );
  }

  public getCartItems(): Observable<CartItem[]> {
    return this.cartItems$.asObservable();
  }
}
