import {
    DogHandler,
    MonkeyHandler,
    SquirrelHandler,
} from "./patterns/behavioural/chainOfResponsibility";

const squirrel = new SquirrelHandler();
const monkey = new MonkeyHandler();
const dog = new DogHandler();

monkey.setNext(squirrel).setNext(dog);

for (let food of ["Nut", "Banana", "Bone"]) {
    console.log(`Client: Who wants a ${food}?`);
    const result = monkey.handle(food);
    console.log(` ${result}`);
}
