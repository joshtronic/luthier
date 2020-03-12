import { containsOnlyLetters } from '../../src';

describe('containsOnlyLetters', () => {
  it('should detect if string contains only letters', () => {
    expect(containsOnlyLetters('TESTING')).toBeTruthy();
    expect(containsOnlyLetters('testing')).toBeTruthy();
    expect(containsOnlyLetters('Testing')).toBeTruthy();
    expect(containsOnlyLetters('- TESTING -')).toBeFalsy();
    expect(containsOnlyLetters('123!!')).toBeFalsy();
  });
});
