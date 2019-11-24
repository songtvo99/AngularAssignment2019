import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BookView } from '@models/book-view.model';

import { Observable } from 'rxjs';
import { AddCartItemCommand } from '@events/add-cart-item.command';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  @Input('books') public books$: Observable<BookView[]>;
  @Output('onAddCart') addCartHandler = new EventEmitter<AddCartItemCommand>();

  currentBookViewExpando: BookView;

  constructor() {}

  ngOnInit() {}

  public doAddCart($event: MouseEvent, bookView: BookView) {
    $event.stopPropagation();
    const { book } = bookView;
    this.addCartHandler.emit({ book, bookedQuantity: 1 } as AddCartItemCommand);
  }

  public doViewDetail(bookView: BookView) {
    bookView.isShowDetail = !bookView.isShowDetail;

    if (this.currentBookViewExpando) {
      this.currentBookViewExpando.isShowDetail = false;
    }

    if (bookView.isShowDetail) {
      this.currentBookViewExpando = bookView;
    } else {
      this.currentBookViewExpando = null;
    }
  }
}
