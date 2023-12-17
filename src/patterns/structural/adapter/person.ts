import { BookInterface } from "./book";

export class Person {
  read(book: BookInterface) {
    book.open();
    book.turnPage();
  }
}
