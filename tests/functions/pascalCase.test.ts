import { pascalCase } from '../../src';

describe('pascalCase', () => {
  it('should convert to pascal case', () => {
    expect(pascalCase('TESTING')).toBe('Testing');
    expect(pascalCase('testing  Testing')).toBe('TestingTesting');
    expect(pascalCase('- TESTING - testing -')).toBe('TestingTesting');
    expect(pascalCase('TESTING testing 123')).toBe('TestingTesting123');
  });
});
