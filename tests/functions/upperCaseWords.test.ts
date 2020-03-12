import { upperCaseWords } from '../../src';

describe('upperCaseWords', () => {
  it('should upper case the first letter of words', () => {
    expect(upperCaseWords('testing testing')).toBe('Testing Testing');
    expect(upperCaseWords(' testing  testing')).toBe(' Testing  Testing');
  });
});
