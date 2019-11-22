import { Component, OnInit } from '@angular/core';
import { CommonService } from '@services/common.service';
import { ActivatedRoute, Router } from '@angular/router';

// app services
import { BookService } from '@services/book.service';
import { CartService } from '@services/cart.service';

// app model
import { PageResult } from '@models/page-result.model';
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
  public books$: Observable<Book[]>;
  public selectedBook: Book;
  public pageIndex = 1;
  public pageSize = 6;
  public currentState: string;

  constructor(
    private bookStoreActivatedRoute: ActivatedRoute,
    private appRouter: Router,
    private bookStoreService: BookService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.pageResult$ = this.queryBookList(this.pageIndex, this.pageSize);
    this.books$ = this.mapToBookListFromPageResult(this.pageResult$);
    this.currentState = 'LIST_VIEW';
  }

  public queryBookList(pageIndex: number, pageSize: number): Observable<PageResult<Book>> {
    return this.bookStoreService.getBooksByPaging(pageIndex, pageSize);
  }

  public mapToBookListFromPageResult(pageResult$: Observable<PageResult<Book>>): Observable<Book[]> {
    return pageResult$.pipe(
      map((pageResultParam: PageResult<Book>) => pageResultParam.pagedItems)
    );
  }

  public viewDetailBookById(book: Book) {
    this.selectedBook = book;
    this.currentState = 'DETAIL_VIEW';
  }

  public onAddCartItem(cartItem: CartItem) {
    this.cartService.addCartItem(cartItem);
  }

  public onBackToList() {
    this.currentState = 'LIST_VIEW';
  }

}
