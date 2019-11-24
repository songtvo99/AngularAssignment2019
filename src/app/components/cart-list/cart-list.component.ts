import { RemoveCartItem } from '@events/remove-cart-item.command';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { CartItem } from '@models/cart-item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input('cartItems') public cartItems$: Observable<CartItem[]>;
  @Output() public onUpdateCartItem: EventEmitter<
    RemoveCartItem
  > = new EventEmitter();

  @Input() public grandTotal: number;

  constructor() {}

  ngOnInit() {}

  public doRemoveCartItem(cartItem: CartItem) {
    this.onUpdateCartItem.emit({ cartItem } as RemoveCartItem);
  }
}
