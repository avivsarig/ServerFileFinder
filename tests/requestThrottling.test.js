import { throttle } from '../public/js/requestThrottling.js';

describe('throttle', () => {
    let func;
    let throttledFunc;

    beforeEach(() => {
        func = jest.fn();
        throttledFunc = throttle(func, 1000);
        jest.useFakeTimers();
    });

    afterEach(() => {
        jest.useRealTimers();
    });

    test('non-throttled two calls', () => {
        throttledFunc();
        jest.advanceTimersByTime(1000);
        throttledFunc();
        jest.advanceTimersByTime(1000);
        expect(func).toHaveBeenCalledTimes(2);
    });

    test('throttled six calls', () => {
        throttledFunc();
        throttledFunc();
        throttledFunc();
        throttledFunc();
        throttledFunc();
        throttledFunc();
        expect(func).toHaveBeenCalledTimes(1);
        jest.advanceTimersByTime(1000);
        expect(func).toHaveBeenCalledTimes(2);
    })

    test('call after two throttled call', () => {
        throttledFunc();
        throttledFunc();
        jest.advanceTimersByTime(1000);
        throttledFunc();
        expect(func).toHaveBeenCalledTimes(3);
    })
});