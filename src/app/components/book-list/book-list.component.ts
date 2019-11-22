import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '@models/book.model';

import { Observable } from 'rxjs';
import { AddCartItemCommand } from '@events/add-cart-item.command';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input('books') public books$: Observable<Book[]>;
  @Output('onAddCart') addCartHandler = new EventEmitter<AddCartItemCommand>();
  @Output('onViewDetail') viewDetailHandler = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  public doAddCart(book: Book) {
    this.addCartHandler.emit({book, bookedQty: 1} as AddCartItemCommand);
  }

  public doViewDetail(book: Book) {
    this.viewDetailHandler.emit(book);
  }

}
