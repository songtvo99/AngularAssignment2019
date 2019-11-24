import { CartItem } from '@models/cart-item.model';
import { CartService } from '@services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'Book Store';
  public numberItems: number;
  public displayNumber: string;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.displayNumber = '';
    this.numberItems = 0;
    this.consumerCartEvent();
  }

  private consumerCartEvent() {
    this.cartService.cartEventEmitter.subscribe((cartItems: CartItem[]) => {
      this.numberItems = cartItems.length;
      this.displayNumber = this.numberItems === 0 ? '' : `${this.numberItems}`;
    });
  }
}
