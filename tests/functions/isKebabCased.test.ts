import { isKebabCased } from '../../src';

describe('isKebabCased', () => {
  it('should detect if string is kebab cased', () => {
    expect(isKebabCased('testing')).toBeTruthy();
    expect(isKebabCased('Testing testing')).toBeFalsy();
    expect(isKebabCased('- testing')).toBeFalsy();
    expect(isKebabCased('testing-testing')).toBeTruthy();
    expect(isKebabCased('testing-testing-123')).toBeTruthy();
  });
});
