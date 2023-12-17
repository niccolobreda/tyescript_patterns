interface Handler {
    setNext(handler: Handler): Handler;
    handle(request: string): string;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

export class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request == "Banana") {
            return "Monkey: I'll eat the Banana";
        }
        return super.handle(request);
    }
}

export class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request == "Nut") {
            return "Squirrel: I'll eat the Nut";
        }
        return super.handle(request);
    }
}

export class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request == "Bone") {
            return "Dog: I'll eat the Bone";
        }
        return super.handle(request);
    }
}
