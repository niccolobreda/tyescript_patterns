export interface EBookInterface {
    openFile(): void;
    nexPage(): void;
}

export class EBook implements EBookInterface {
    openFile(): void {
        console.log("File open");
    }

    nexPage(): void {
        console.log("Next page");
    }
}
