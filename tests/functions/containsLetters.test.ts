import { containsLetters } from '../../src';

describe('containsLetters', () => {
  it('should determine if a string contains any letters', () => {
    expect(containsLetters('TESTING')).toBeTruthy();
    expect(containsLetters('testing')).toBeTruthy();
    expect(containsLetters('Testing Testing 123')).toBeTruthy();
    expect(containsLetters('123!!~!')).toBeFalsy();
  });
});
