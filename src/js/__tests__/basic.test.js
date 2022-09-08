import Validator from '../app';

test('valid name', () => {
  expect(new Validator('Tanya').validateUsername()).toBe(true);
});
test('valid name', () => {
  expect(new Validator('Ta1nya').validateUsername()).toBe(true);
});
test('valid ', () => {
  expect(new Validator('Tan12-ya').validateUsername()).toBe(true);
});

test('first lowline', () => {
  expect(new Validator('_Tan').validateUsername()).toBe(false);
});

test('first dash', () => {
  expect(new Validator('-Tanya').validateUsername()).toBe(false);
});

test('end lowline', () => {
  expect(new Validator('Tan_').validateUsername()).toBe(false);
});

test('first number', () => {
  expect(new Validator('1Tanya').validateUsername()).toBe(false);
});

test('end dash', () => {
  expect(new Validator('Tanya-').validateUsername()).toBe(false);
});

test('over 3 number', () => {
  expect(new Validator('Tanya1234V').validateUsername()).toBe(false);
});

test('end number', () => {
  expect(new Validator('Tanya1').validateUsername()).toBe(false);
});
