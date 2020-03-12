import { containsOnlySpecialCharacters } from '../../src';

describe('containsOnlySpecialCharacters', () => {
  it('should detect if string contains only special characters', () => {
    expect(containsOnlySpecialCharacters('testing')).toBeFalsy();
    expect(containsOnlySpecialCharacters('Testing 123!')).toBeFalsy();
    expect(containsOnlySpecialCharacters('- 123')).toBeFalsy();
    expect(containsOnlySpecialCharacters('!@#$')).toBeTruthy();
  });
});
