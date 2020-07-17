import Subject from '../subject';
import Observer from '../observer';

export default class MockSubject implements Subject {
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

    notify(data?: any): void {
        for (const observer of this.observers) {
            observer.update(this, data);
        }
    }
}
