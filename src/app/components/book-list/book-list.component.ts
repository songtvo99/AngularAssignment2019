import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '@models/book.model';
import { PageResult } from '@models/page-result.model';
import { BookService } from '@services/book.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public pageResult$: Observable<PageResult<Book>>;
  public books$: Observable<Book[]>;
  public isLoading: true;
  public pageIndex = 1;
  public pageSize = 10;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit() {
    this.pageResult$ = this.bookService
                            .getBooksByPaging(this.pageIndex, this.pageSize);
    this.books$ = this.mapToBookListFromPageResult(this.pageResult$);
  }

  public mapToBookListFromPageResult(pageResult$: Observable<PageResult<Book>>): Observable<Book[]> {
    return pageResult$.pipe(
      map((pageResultParam: PageResult<Book>) => pageResultParam.pagedItems)
    );
  }

  public viewDetailBookById(bookId: string) {
    this.router.navigate([`/book-store/${bookId}/detail`],
                              { relativeTo: this.activatedRoute });
  }

}
