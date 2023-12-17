export interface BookInterface {
  open(): void;
  turnPage(): void;
}

export class Book implements BookInterface {
  open(): void {
    console.log("Book open");
  }

  turnPage(): void {
    console.log("Page Turned");
  }
}
