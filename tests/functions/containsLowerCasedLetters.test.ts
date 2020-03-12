import { containsLowerCasedLetters } from '../../src';

describe('containsLowerCasedLetters', () => {
  it('should determine if a string contains any lower cased letters', () => {
    expect(containsLowerCasedLetters('TESTING')).toBeFalsy();
    expect(containsLowerCasedLetters('testing  testing')).toBeTruthy();
    expect(containsLowerCasedLetters('- TESTING - testing -')).toBeTruthy();
    expect(containsLowerCasedLetters('-----')).toBeFalsy();
    expect(containsLowerCasedLetters('123!!!')).toBeFalsy();
  });
});
