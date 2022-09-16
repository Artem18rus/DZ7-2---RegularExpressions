import { search } from '../regular.js';

test('TEST-OK1', () => {
    const totalNumb = search('3300 00 0000');
    expect(totalNumb).toBe('+3300000000');
});

test('TEST-OK2', () => {
    const totalNumb = search('3(300) 00 0000');
    expect(totalNumb).toBe('+3300000000');
});

test('TEST-OK3', () => {
    const totalNumb = search('3300-00-0000');
    expect(totalNumb).toBe('+3300000000');
});

test('TEST-OK4', () => {
    const totalNumb = search('+3300000000');
    expect(totalNumb).toBe('+3300000000');
});