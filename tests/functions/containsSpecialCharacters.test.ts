import { containsSpecialCharacters } from '../../src';

describe('containsSpecialCharacters', () => {
  it('should determine if a string contains any special characters', () => {
    expect(containsSpecialCharacters('TESTING')).toBeFalsy();
    expect(containsSpecialCharacters('testing  testing')).toBeTruthy();
    expect(containsSpecialCharacters('- TESTING - testing -')).toBeTruthy();
    expect(containsSpecialCharacters('-----')).toBeTruthy();
    expect(containsSpecialCharacters('123!!!')).toBeTruthy();
  });
});
