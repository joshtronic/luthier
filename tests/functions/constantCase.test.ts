import { constantCase } from '../../src';

describe('constantCase', () => {
  it('should convert to constant case', () => {
    expect(constantCase('TESTING')).toBe('TESTING');
    expect(constantCase('testing  Testing')).toBe('TESTING_TESTING');
    expect(constantCase('- TESTING - testing -')).toBe('TESTING_TESTING');
    expect(constantCase('TESTING testing 123')).toBe('TESTING_TESTING_123');
  });
});
