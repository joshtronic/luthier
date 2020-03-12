import { dotCase } from '../../src';

describe('dotCase', () => {
  it('should convert to dot case', () => {
    expect(dotCase('TESTING')).toBe('testing');
    expect(dotCase('testing  Testing')).toBe('testing.testing');
    expect(dotCase('- TESTING - testing -')).toBe('testing.testing');
    expect(dotCase('TESTING testing 123')).toBe('testing.testing.123');
  });
});
