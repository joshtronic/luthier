import { containsOnlyNumbers } from '../../src';

describe('containsOnlyNumbers', () => {
  it('should detect if string contains only numbers', () => {
    expect(containsOnlyNumbers('testing')).toBeFalsy();
    expect(containsOnlyNumbers('Testing testing 123')).toBeFalsy();
    expect(containsOnlyNumbers('- 123')).toBeFalsy();
    expect(containsOnlyNumbers('123')).toBeTruthy();
  });
});
