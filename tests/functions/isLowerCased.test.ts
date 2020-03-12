import { isLowerCased } from '../../src';

describe('isLowerCased', () => {
  it('should detect is string is lower cased', () => {
    expect(isLowerCased('testing')).toBeTruthy();
    expect(isLowerCased('Testing')).toBeFalsy();
    expect(isLowerCased('TESTING')).toBeFalsy();
    expect(isLowerCased('- testing')).toBeTruthy();
  });
});
