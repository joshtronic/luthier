import { containsUpperCasedLetters } from '../../src';

describe('containsUpperCasedLetters', () => {
  it('should determine if a string contains any upper cased letters', () => {
    expect(containsUpperCasedLetters('TESTING')).toBeTruthy();
    expect(containsUpperCasedLetters('testing  testing')).toBeFalsy();
    expect(containsUpperCasedLetters('- TESTING - testing -')).toBeTruthy();
    expect(containsUpperCasedLetters('-----')).toBeFalsy();
    expect(containsUpperCasedLetters('123!!!')).toBeFalsy();
  });
});
