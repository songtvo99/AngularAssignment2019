import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';
import { Book } from '@app/models/book.model';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  @Input('book') public selectedBook: Book;
  @Output() public  onBackToList = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  public backToBookStore() {
    this.onBackToList.emit();
  }

}
