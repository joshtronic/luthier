import { isDotCased } from '../../src';

describe('isDotCased', () => {
  it('should detect if string is dot cased', () => {
    expect(isDotCased('testing')).toBeTruthy();
    expect(isDotCased('Testing testing')).toBeFalsy();
    expect(isDotCased('- testing')).toBeFalsy();
    expect(isDotCased('testing.testing')).toBeTruthy();
    expect(isDotCased('testing.testing.123')).toBeTruthy();
  });
});
