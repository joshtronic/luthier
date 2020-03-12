import { kebabCase } from '../../src';

describe('kebabCase', () => {
  it('should convert to kebab case', () => {
    expect(kebabCase('TESTING')).toBe('testing');
    expect(kebabCase('testing  Testing')).toBe('testing-testing');
    expect(kebabCase('- TESTING - testing -')).toBe('testing-testing');
    expect(kebabCase('TESTING testing 123')).toBe('testing-testing-123');
  });
});
