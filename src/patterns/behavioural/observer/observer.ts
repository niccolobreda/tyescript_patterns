interface ObserverInteface {
  id: string;
  handle(): void;
}

export class Observer implements ObserverInteface {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  handle() {
    console.log(this.id);
  }
}
