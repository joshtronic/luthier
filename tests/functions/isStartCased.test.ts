import { isStartCased } from '../../src';

describe('isStartCased', () => {
  it('should detect if string is start cased', () => {
    expect(isStartCased('testing')).toBeFalsy();
    expect(isStartCased('Testing')).toBeTruthy();
    expect(isStartCased('Testing testing')).toBeFalsy();
    expect(isStartCased('- testing')).toBeFalsy();
    expect(isStartCased('testing Testing')).toBeFalsy();
    expect(isStartCased('Testing Testing')).toBeTruthy();
    expect(isStartCased('Testing Testing 123')).toBeTruthy();
  });
});
