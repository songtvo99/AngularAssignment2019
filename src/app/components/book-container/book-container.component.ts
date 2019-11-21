import { Component, OnInit } from '@angular/core';
import { BookService } from '@app/services/book.service';

@Component({
  selector: 'app-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss']
})
export class BookContainerComponent implements OnInit {

  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

}
