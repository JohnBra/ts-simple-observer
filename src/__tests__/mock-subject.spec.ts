import {MockObserver, MockSubject, Observer} from '..';

describe('MockSubject class', () => {
    test('should have empty observers array on instantiation', () => {
        const mockSubject = new MockSubject();

        expect(Array.isArray(mockSubject.observers)).toBe(true);
        expect(mockSubject.observers.length).toEqual(0);
    });

    test('attach() should add an observer to the observers array', () => {
        const mockSubject = new MockSubject();
        expect(mockSubject.observers.length).toBe(0);
        mockSubject.attach({} as Observer);
        expect(mockSubject.observers.length).toBe(1);
        expect(mockSubject.observers[0]).toMatchObject({});
    });

    test('detach() should remove an observer from the observers array', () => {
        const mockSubject = new MockSubject();

        mockSubject.observers.push({} as Observer);
        expect(mockSubject.observers.length).toBe(1);
        mockSubject.detach({} as Observer)
        expect(mockSubject.observers.length).toBe(0);
    });

    test('notify() should notify all observers with provided data', () => {
        const mockSubject = new MockSubject();
        const mockObserverA = new MockObserver();
        const mockObserverB = new MockObserver();
        const spyUpdate = jest.spyOn(MockObserver.prototype, 'update').mockImplementation(() => {});

        mockSubject.observers.push(mockObserverA);
        mockSubject.observers.push(mockObserverB);

        mockSubject.notify('a');
        expect(spyUpdate).toHaveBeenCalledTimes(2);
        spyUpdate.mockClear();
    });
})
