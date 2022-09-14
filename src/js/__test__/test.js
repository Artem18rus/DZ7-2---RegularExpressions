import { Validator, eks1 } from '../regular.js';

test('TEST-OK', () => {
    expect(eks1.validateUsername('sdfgsdf')).toBe(true);
});

test('TEST-ERR1', () => {
    expect(eks1.validateUsername('sdfgsdfЮ')).toBe(false);
});

test('TEST-ERR2', () => {
    expect(eks1.validateUsername('sdfgsdf5555')).toBe(false);
});

test('TEST-ERR3', () => {
    expect(eks1.validateUsername('-sdfgsdf5')).toBe(false);
});

test('TEST-ERR4', () => {
    expect(eks1.validateUsername('-sdfgsdf')).toBe(false);
});

test('TEST-ERR5', () => {
    expect(eks1.validateUsername('sdfgsdf5')).toBe(false);
});