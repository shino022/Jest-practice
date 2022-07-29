import {capitalize, reverseString, calculator} from './test-practice';

test('All lower', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('All upper', () => {
  expect(capitalize('HELLO')).toBe('HELLO');
});

test('Mixed', () => {
  expect(capitalize('hELlO')).toBe('HELlO');
});

//--------------------------------------------
 test('basic case', ()=> {
  expect(reverseString('reverse')).toBe('esrever');
 })

 test('empty string', ()=> {
  expect(reverseString('')).toBe('');
 })

 //--------------------------------------------
test('additoin', () => {
  expect(calculator.add(1, 5)).toBe(6);
})

test('subtraction', () => {
  expect(calculator.subtract(1, 5)).toBe(-4);
})

test('multiplication', () => {
  expect(calculator.multiply(1, 5)).toBe(5);
})

test('division', () => {
  expect(calculator.divide(4, 2)).toBe(2);
})