import { snakeCase } from '../../src';

describe('snakeCase', () => {
  it('should convert to snake case', () => {
    expect(snakeCase('TESTING')).toBe('testing');
    expect(snakeCase('testing  Testing')).toBe('testing_testing');
    expect(snakeCase('- TESTING - testing -')).toBe('testing_testing');
    expect(snakeCase('TESTING testing 123')).toBe('testing_testing_123');
  });
});
