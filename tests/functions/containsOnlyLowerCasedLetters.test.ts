import { containsOnlyLowerCasedLetters } from '../../src';

describe('containsOnlyLowerCasedLetters', () => {
  it('should detect if string contains only lower cased letters', () => {
    expect(containsOnlyLowerCasedLetters('testing')).toBeTruthy();
    expect(containsOnlyLowerCasedLetters('Testing testing')).toBeFalsy();
    expect(containsOnlyLowerCasedLetters('- testing')).toBeFalsy();
    expect(containsOnlyLowerCasedLetters('testing testing')).toBeFalsy();
  });
});
