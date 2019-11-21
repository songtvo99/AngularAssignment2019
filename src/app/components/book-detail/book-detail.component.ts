import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BookService } from '@app/services/book.service';
import { Book } from '@app/models/book.model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  public selectedBookId: string;
  public selectedBook$: Observable<Book>;

  constructor(
    private activeRouter: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {
  }

  ngOnInit() {
    this.selectedBook$ = this.activeRouter.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedBookId = params.get('id');
        return this.bookService.getBookById(this.selectedBookId);
      })
    );
  }

  public backToBookStore() {
    this.router.navigate(['/book-store']);
  }

}
