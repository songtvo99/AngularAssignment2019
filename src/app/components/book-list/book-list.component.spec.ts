import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookListComponent } from './book-list.component';

describe('BookListComponent (isolated test) ', () => {
  let component: BookListComponent;

  it('should create', () => {
    component = new BookListComponent();
    expect(component).toBeTruthy();
  });
});

describe('BookListComponent (shallow test) ', () => {
  let component: BookListComponent;

  it('should create', () => {
    component = new BookListComponent();
    expect(component).toBeTruthy();
  });
});

describe('BookListComponent (integrated test) ', () => {
  let component: BookListComponent;

  it('should create', () => {
    component = new BookListComponent();
    expect(component).toBeTruthy();
  });
});
