type SubscribeFunction<Events> = <Key extends string & keyof Events>(
    event: Key,
    fn: MessageFn<Events>
) => void;

type MessageFn<Events> = <Key extends string & keyof Events>(
    message: Events[Key]
) => void;

type PublishFunction<Events> = <Key extends string & keyof Events>(
    event: Key,
    message: Events[Key]
) => void;

interface PubSubInterface<Events> {
    subscribe: SubscribeFunction<Events>;
    unsubscribe: SubscribeFunction<Events>;
    publish: PublishFunction<Events>;
}

export class PubSub<Events> implements PubSubInterface<Events> {
    private handlers: { [key: string]: MessageFn<Events>[] } = {};

    subscribe(event, callBack) {
        const list = this.handlers[event] ?? [];
        list.push(callBack);
        this.handlers[event] = list;
    }
    unsubscribe(event, callback) {
        let list = this.handlers[event] ?? [];
        list = list.filter((h) => h !== callback);
        this.handlers[event] = list;
    }

    publish(event, message) {
        this.handlers[event].forEach((h) => h(message));
    }
}
