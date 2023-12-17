import { BookInterface } from "./book";
import { EBookInterface } from "./eBook";

export class EBookAdapter implements BookInterface {
    private eBook: EBookInterface;

    constructor(eBook: EBookInterface) {
        this.eBook = eBook;
    }

    open(): void {
        this.eBook.openFile();
    }

    turnPage(): void {
        this.eBook.nexPage();
    }
}
