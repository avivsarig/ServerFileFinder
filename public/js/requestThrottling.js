export function throttle(func, delay) {
    let timeoutId = null;
    let lastCallTime = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCallTime >= delay) {
            lastCallTime = now;
            return func(...args);
        } else {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                lastCallTime = now;
                return func(...args);
            }, delay);
        }
    };
}
