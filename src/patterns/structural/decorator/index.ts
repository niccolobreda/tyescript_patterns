interface WashService {
  price: number;
  getPrice(): number;
}

export class RimWash implements WashService {
  private washService: WashService;
  public price = 15;

  constructor(washService?: WashService) {
    if (washService) {
      this.washService = washService;
    }
  }

  getPrice() {
    return (this.washService?.getPrice() ?? 0) + this.price;
  }
}

export class InteriorWash implements WashService {
  private washService: WashService;
  public price = 25;

  constructor(washService?: WashService) {
    if (washService) {
      this.washService = washService;
    }
  }

  getPrice() {
    return (this.washService?.getPrice() ?? 0) + this.price;
  }
}
