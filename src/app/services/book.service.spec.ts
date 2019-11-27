import { CommonService } from '@services/common.service';
import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { BookService } from '@services/book.service';

class MockHttpClient {}

class MockCommonService {
  public getLocalSessionValue(key: string) {
    return {};
  }
}

describe('BookService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: CommonService, useClass: MockCommonService }
      ]
    })
  );

  it('should be created instance of service', () => {
    const service: BookService = TestBed.get(BookService);
    expect(service).toBeTruthy();
  });
});
