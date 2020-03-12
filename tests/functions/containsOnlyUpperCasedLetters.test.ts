import { containsOnlyUpperCasedLetters } from '../../src';

describe('containsOnlyUpperCasedLetters', () => {
  it('should detect if string contains only upper cased letters', () => {
    expect(containsOnlyUpperCasedLetters('TESTING')).toBeTruthy();
    expect(containsOnlyUpperCasedLetters('Testing testing')).toBeFalsy();
    expect(containsOnlyUpperCasedLetters('- testing')).toBeFalsy();
    expect(containsOnlyUpperCasedLetters('TESTING TESTING')).toBeFalsy();
  });
});
