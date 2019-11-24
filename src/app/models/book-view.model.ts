import { Book } from '@models/book.model';
export interface BookView {
  isShowDetail: boolean;
  book: Book;
}
