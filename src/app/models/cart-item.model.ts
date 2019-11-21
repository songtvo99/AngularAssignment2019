import { Book } from './book.model';

export interface CartItem {
  bookId: string;
  book: Book;
  bookedQuantity: number;
  pricing: number;
  lineTotal: number;
}
