import { Subject } from './subject';

/**
* The Observer interface declares the update method, used by subjects
*/
export interface Observer {
    /**
    * Receive an update from a subject.
    *
    * @param subject the subject of which triggered the notification
    * @param data optional data the subject sent with the notification
    */
    update(subject: Subject, data?: any): void;
}
