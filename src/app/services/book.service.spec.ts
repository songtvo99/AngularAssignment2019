import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';

describe('BookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created instance of service', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });

});
