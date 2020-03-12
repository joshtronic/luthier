import { isPascalCased } from '../../src';

describe('isPascalCased', () => {
  it('should detect if string is pascal cased', () => {
    expect(isPascalCased('testing')).toBeFalsy();
    expect(isPascalCased('Testing')).toBeTruthy();
    expect(isPascalCased('Testing testing')).toBeFalsy();
    expect(isPascalCased('- testing')).toBeFalsy();
    expect(isPascalCased('TestingTesting')).toBeTruthy();
    expect(isPascalCased('TestingTesting123')).toBeTruthy();
  });
});
