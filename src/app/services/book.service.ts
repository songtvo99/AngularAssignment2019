import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { filter, first, concatMap } from 'rxjs/operators';

import { Book } from '@app/models/book.model';
import { PageResult } from '@app/models/page-result.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  public getBookById(bookId: string): Observable<Book> {
    return this.getBooksByPaging(1, 10).pipe(
      concatMap((pageResult: PageResult<Book>) => pageResult.pagedItems),
      filter( book => book.id === bookId),
      first()
    );
  }

  public getBooksByPaging(pageIndex: number, pageSize: number): Observable<PageResult<Book>> {
    return of(
      {
        pageIndex,
        pageSize,
        totalItems: 2,
        orderBy: 'title',
        orderDirection: 'asc',
        canNext: false,
        canPrevious: false,
        canFirst: false,
        canLast: false,
        pagedItems: [
          {
            id: `aaaa-1111-2222-3333-abcd1`,
            title: `Programming C#`,
            image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg',
            category: 'Programming',
            quantity: 100,
            price: 1150000,
            description: `This is a book related .NET`
          } as Book,
          {
            id: `aaaa-1111-2222-3333-abcd2`,
            title: `Programming J2EE`,
            image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
            category: 'Programming',
            quantity: 10,
            price: 1250000,
            description: 'This is a book related Java '
          } as Book,
          {
            id: `aaaa-1111-2222-3333-abcd3`,
            title: `Programming Book 3`,
            image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
            category: 'Programming',
            quantity: 10,
            price: 1250000,
            description: 'This is a book related Java '
          } as Book,
          {
            id: `aaaa-1111-2222-3333-abcd4`,
            title: `Programming Book 3`,
            image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
            category: 'Programming',
            quantity: 10,
            price: 1250000,
            description: 'This is a book related Java '
          } as Book,
          {
            id: `aaaa-1111-2222-3333-abcd5`,
            title: `Programming Book 3`,
            image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg',
            category: 'Programming',
            quantity: 10,
            price: 1250000,
            description: 'This is a book related Java '
          } as Book,
          {
            id: `aaaa-1111-2222-3333-abcd5`,
            title: `Programming Book 3`,
            image: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
            category: 'Programming',
            quantity: 10,
            price: 1250000,
            description: 'This is a book related Java '
          } as Book,
        ]
      } as PageResult<Book>);
  }

}
