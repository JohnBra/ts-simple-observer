# A small lib for the observer pattern
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


class King implements Observer {
    update(subject: Subject, data: number): void {
        console.log(`Received ${data} from subject: `, subject);
    }
}

class Servant implements Subject {
    observers: Observer[];

    constructor() {
        this.observers = [];
    }

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
    }

    notify(data: number): void {
        for (let observer of this.observers) {
            observer.update(this, data);
        }
    }
}
```
