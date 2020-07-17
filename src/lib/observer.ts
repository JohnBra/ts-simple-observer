import Subject from './subject';

/**
* The Observer interface declares the update method, used by subjects
*/
export default interface Observer {
    /**
    * Receive update from subject.
    *
    * @param subject the subject of which triggered the notification
    * @param data optional data the subject sent with the notification
    */
    update(subject: Subject, data?: any): void;
}
