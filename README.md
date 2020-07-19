# A small lib for the observer pattern
![build](https://github.com/JohnBra/ts-simple-observer/workflows/build/badge.svg)

Just simple observer/subject TypeScript interfaces as well as convenient mock classes for unit testing.

## Installing
```
npm install ts-simple-observer
```
or with yarn:

```
yarn add ts-simple-observer
```

## Usage example
```typescript
import { Observer, Subject } from 'ts-simple-observer';

// define your observer class
class King implements Observer {
    servant: Servant;

    constructor() {
        this.servant = new Servant();   // instantiate a new subject
        this.servant.attach(this);      // attach this 'King' instance as an observer
    }

    // implementation of the 'update' method required by the observer interface
    update(subject: Subject, data: number): void {
        console.log(`Received ${data} from subject: `, subject);
    }
}

class Servant implements Subject {
    // instance member 'observers' required by the subject interface
    // you could also use Map<any, Observer> or Set<Observer>
    observers: Observer[];

    constructor() {
        this.observers = [];
    }

    // implementation of the 'attach' method required by the subject interface
    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    // implementation of the 'detach' method required by the subject interface
    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    }

    // implementation of the 'notify' method required by the subject interface
    notify(data: number): void {
        for (let observer of this.observers) {
            observer.update(this, data);
        }
    }
}
```
