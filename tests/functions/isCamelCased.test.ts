import { isCamelCased } from '../../src';

describe('isCamelCased', () => {
  it('should detect if string is camel cased', () => {
    expect(isCamelCased('testing')).toBeTruthy();
    expect(isCamelCased('Testing testing')).toBeFalsy();
    expect(isCamelCased('- testing')).toBeFalsy();
    expect(isCamelCased('testingTesting')).toBeTruthy();
    expect(isCamelCased('testingTesting123')).toBeTruthy();
  });
});
