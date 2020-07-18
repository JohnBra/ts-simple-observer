import { MockObserver, MockSubject } from '..';

describe('MockObserver class', () => {
    test('should instantiate updateReceived, updateCount and subjectDataMap with sensible values', () => {
        const mockObserver = new MockObserver();

        expect(mockObserver.updateReceived).toBe(false);
        expect(mockObserver.updateCount).toEqual(0);
        expect(mockObserver.subjectDataMap).toEqual(new Map([]));
    });

    test('update() should modify updateReceived, updateCount and subjectDataMap accordingly', () => {
        const mockObserver = new MockObserver();
        const mockSubject = new MockSubject();
        mockSubject.attach(mockObserver);

        mockSubject.notify('a');

        expect(mockObserver.updateReceived).toBe(true);
        expect(mockObserver.updateCount).toEqual(1);
        expect(mockObserver.subjectDataMap.get(mockSubject)).toEqual('a');
    });
})
