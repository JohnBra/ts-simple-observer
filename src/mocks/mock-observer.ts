import { Subject } from '..';
import { Observer } from '..';

export class MockObserver implements Observer {
    updateReceived: boolean;
    updateCount: number;
    subjectDataMap: Map<Subject, any>;

    constructor() {
        this.updateReceived = false;
        this.updateCount = 0;
        this.subjectDataMap = new Map([]);
    }

    update(subject: Subject, data?: any): void {
        this.updateReceived = true;
        this.updateCount++;
        this.subjectDataMap.set(subject, data);
    }
}
