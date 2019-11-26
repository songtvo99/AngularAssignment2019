import { ActivatedRoute, Router } from '@angular/router';
import { AppConstant } from '@constants/app.constant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
  @Output() public onSaveBook = new EventEmitter();
  @Output() public onBackToList = new EventEmitter();

  public bookDetailForm: FormGroup;
  public bookCategories: string[];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.bookCategories = AppConstant.BOOK_CATEGORIES;
    this.buildForm();
  }

  private buildForm() {
    this.bookDetailForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: [0, [Validators.required]],
      inStockQuantity: [0, [Validators.required]],
      image: ['', [Validators.required]]
    });
  }

  public backToBookStore() {
    this.onBackToList.emit();
  }

  private buildBookInfoFromForm(): Book {
    const id = this.selectedBook ? this.selectedBook.id : '';
    return {
      id: '',
      title: this.bookDetailForm.get('title').value,
      category: this.bookDetailForm.get('category').value,
      description: this.bookDetailForm.get('description').value,
      quantity: +this.bookDetailForm.get('inStockQuantity').value,
      price: +this.bookDetailForm.get('price').value
    } as Book;
  }

  public onFormSubmitBook() {
    if (!this.bookDetailForm.invalid) {
      const book = this.buildBookInfoFromForm();
      this.onSaveBook.emit(book);
    }
  }

  public navigateBackToList() {
    this.onBackToList.emit();
  }
}
