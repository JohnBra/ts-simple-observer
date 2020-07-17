import { Observer } from './observer';

/**
* The Subject interface declares a set of methods for managing subscribers
*/
export interface Subject {
    /**
    * Collection of observers
    */
    observers: Observer[] | Map<any, Observer> | Set<Observer>;

    /**
    * Attach an observer to the subject
    * Should add observer object to observers collection
    *
    * @param observer to be attached to subject
    */
    attach(observer: Observer): void | boolean | number;

    /**
    * Detach an observer from the subject
    * Should remove the observer from the observers collection
    *
    * @param observer to be detached from subject
    */
    detach(observer: Observer): void | boolean | number;

    /**
     * Notify observers about an event.
     *
     * @param data optional data to notify observers with
     */
    notify(data?: any): void;
}
