import caesarCipher from './caesarCipher'

test('Basic case', () => {
  expect(caesarCipher('defend the east wall of the castle'))
  .toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
});

test('Keep the same case', () => {
  expect(caesarCipher('Defend the east WaLL of the castle'))
  .toBe('Efgfoe uif fbtu XbMM pg uif dbtumf')
});

test('Punctuation', () => {
  expect(caesarCipher('a.bcdefghijklmnopqrstuvwxyz!'))
  .toBe('b.cdefghijklmnopqrstuvwxyza!')
});