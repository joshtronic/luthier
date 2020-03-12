import { upperCaseFirst } from '../../src';

describe('upperCaseFirst', () => {
  it('should upper case the first letter', () => {
    expect(upperCaseFirst('testing')).toBe('Testing');
  });
});
