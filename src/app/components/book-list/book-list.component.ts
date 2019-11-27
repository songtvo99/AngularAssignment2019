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
  @Input() public books$: Observable<BookView[]>;
  @Output() public addCartHandler = new EventEmitter<AddCartItemCommand>();

  currentBookViewExpander: BookView;

  constructor() {}

  ngOnInit() {}

  public doAddCart($event: MouseEvent, bookView: BookView) {
    $event.stopPropagation();
    const { book } = bookView;
    this.addCartHandler.emit({ book, bookedQuantity: 1 } as AddCartItemCommand);
  }

  public doViewDetail(bookView: BookView) {
    bookView.isShowDetail = !bookView.isShowDetail;

    if (this.currentBookViewExpander) {
      this.currentBookViewExpander.isShowDetail = false;
    }

    if (bookView.isShowDetail) {
      this.currentBookViewExpander = bookView;
    } else {
      this.currentBookViewExpander = null;
    }
  }
}
