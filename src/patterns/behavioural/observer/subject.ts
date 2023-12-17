import { Observer } from "./observer";

interface SubjectInterface {
    notify: () => void;
    attach: (observer: Observer) => void;
    detach: (observer: Observer) => void;
}

export class Subject implements SubjectInterface {
    private observers: Map<string, Observer> = new Map();

    attach(observer: Observer) {
        this.observers.set(observer.id, observer);
    }

    detach(observer: Observer) {
        this.observers.delete(observer.id);
    }

    notify() {
        this.observers.forEach((observer) => observer.handle());
    }
}
