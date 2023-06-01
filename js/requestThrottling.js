export function throttle(func, delay) {
    let timeoutId = null;

    return function (args) {
        const later = function () {
            timeoutId = null;
            func(args);
        };

        clearTimeout(timeoutId);
        timeoutId = setTimeout(later, delay);
    };
}