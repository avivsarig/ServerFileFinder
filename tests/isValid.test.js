import { isValidURL } from '../public/js/validation';

test('validURL', () => {
    expect(isValidURL('https://www.google.com')).toBe(true);
});

test('Invalid URL', () => {
    expect(isValidURL('invalid_url')).toBe(false);
});

test('Empty string', () => {
    expect(isValidURL('')).toBe(false);
});

test('URL without protocol', () => {
    expect(isValidURL('www.google.com')).toBe(false);
});

test('URL with special characters', () => {
    expect(isValidURL('http://example.com/a$b#c^')).toBe(true);
});

test('URL with unusual TLD', () => {
    expect(isValidURL('http://example.ooo')).toBe(true);
});

test('URL with IP address', () => {
    expect(isValidURL('http://127.0.0.1')).toBe(true);
});
