import { Book } from '@models/book.model';

export interface AddCartItemCommand {
  book: Book;
  bookedQty: number;
}
