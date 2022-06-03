import { sum } from '../math';

test('add two numbers together', () => {
  expect(sum(1, 1)).toBe(2);
  expect(sum(-100, 200)).toBe(100);
  expect(sum(1, 1)).not.toBe(100);
});

test('throws an error if arguments are not numbers', () => {
  expect(() => sum(1, '2')).toThrow('Pass only numbers!');
  expect(() => sum('1', 'asdasd')).toThrow('Pass only numbers!');
  // expect(() => sum(1, 1)).toThrow('Pass only numbers!');
  // expect(() => sum(NaN, 1)).toThrow('Pass only numbers!');
});