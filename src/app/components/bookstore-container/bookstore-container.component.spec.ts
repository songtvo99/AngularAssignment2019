import { CartService } from '@services/cart.service';
import { BookService } from '@services/book.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreContainerComponent } from './bookstore-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockBookService {}

class MockCartService {}

describe('BookstoreContainerComponent', () => {
  let component: BookstoreContainerComponent;
  let fixture: ComponentFixture<BookstoreContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookstoreContainerComponent],
      providers: [
        { provide: BookService, useClass: MockBookService },
        { provide: CartService, useClass: MockCartService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
