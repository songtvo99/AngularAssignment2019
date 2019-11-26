import { AppConstant } from '@constants/app.constant';
import { PageRequest } from './../../models/page-request.model';
import { AddCartItemCommand } from '@events/add-cart-item.command';
import { Component, OnInit } from '@angular/core';
import { CommonService } from '@services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

// app services
import { BookService } from '@services/book.service';
import { CartService } from '@services/cart.service';

// app model
import { PageResult } from '@models/page-result.model';
import { BookView } from '@models/book-view.model';
import { Book } from '@models/book.model';
import { CartItem } from '@app/models/cart-item.model';

// rx lib
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-bookstore-container',
  templateUrl: './bookstore-container.component.html',
  styleUrls: ['./bookstore-container.component.scss']
})
export class BookstoreContainerComponent implements OnInit {
  public pageResult$: Observable<PageResult<Book>>;
  public books$: Observable<BookView[]>;
  public selectedBook: Book;
  public pageIndex = 1;
  public pageSize = 6;
  public currentState: string;
  public canAddBook: boolean;

  constructor(
    private bookStoreService: BookService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.pageResult$ = this.queryBookList(this.pageIndex, this.pageSize);
    const rawBooks$ = this.mapToBookListFromPageResult(this.pageResult$);
    this.books$ = this.mapToBookViewFromBook(rawBooks$);
    this.currentState = AppConstant.BOOK_LIST_VIEW;
    this.canAddBook = true;
  }

  public queryBookList(
    pageIndex: number,
    pageSize: number
  ): Observable<PageResult<Book>> {
    return this.bookStoreService.getBooksByPaging({
      pageIndex,
      pageSize
    } as PageRequest);
  }

  public mapToBookListFromPageResult(
    pageResult$: Observable<PageResult<Book>>
  ): Observable<Book[]> {
    return pageResult$.pipe(
      map((pageResultParam: PageResult<Book>) => pageResultParam.pagedItems)
    );
  }

  public mapToBookViewFromBook(
    books$: Observable<Book[]>
  ): Observable<BookView[]> {
    return books$.pipe(
      map((books: Book[]) =>
        books.map(book => {
          return { book, isShowDetail: false } as BookView;
        })
      )
    );
  }

  public viewDetailBookById(book: Book) {
    this.selectedBook = book;
    this.currentState = AppConstant.BOOK_DETAIL_VIEW;
  }

  public onAddCartItem($command: AddCartItemCommand) {
    this.cartService.addCartItem({
      book: $command.book,
      bookedQuantity: $command.bookedQuantity
    } as CartItem);
    this.cartService.updateCart();
  }

  public onBackToList() {
    this.currentState = AppConstant.BOOK_LIST_VIEW;
  }

  public onAddNewBook() {
    this.currentState = AppConstant.BOOK_DETAIL_VIEW;
  }

  public onSaveBook(book: Book) {
    this.bookStoreService.addBook(book); // TODO: subscribe and handle notification
  }
}
