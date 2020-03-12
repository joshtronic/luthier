import { isUpperCased } from '../../src';

describe('isUpperCased', () => {
  it('should detect if string is upper cased', () => {
    expect(isUpperCased('testing')).toBeFalsy();
    expect(isUpperCased('Testing')).toBeFalsy();
    expect(isUpperCased('TESTING')).toBeTruthy();
    expect(isUpperCased('- TESTING')).toBeTruthy();
  });
});
