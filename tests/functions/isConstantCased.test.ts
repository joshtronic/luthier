import { isConstantCased } from '../../src';

describe('isConstantCased', () => {
  it('should detect if string is constant cased', () => {
    expect(isConstantCased('testing')).toBeFalsy();
    expect(isConstantCased('Testing testing')).toBeFalsy();
    expect(isConstantCased('- testing')).toBeFalsy();
    expect(isConstantCased('TESTING_TESTING')).toBeTruthy();
    expect(isConstantCased('TESTING_TESTING_123')).toBeTruthy();
  });
});
