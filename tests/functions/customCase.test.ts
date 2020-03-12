import { customCase } from '../../src';

describe('customCase', () => {
  it('should convert to a custom case', () => {
    expect(customCase('*', 'TESTING')).toBe('testing');
    expect(customCase('*', 'testing  Testing')).toBe('testing*testing');
    expect(customCase('*', '- TESTING - testing -')).toBe('testing*testing');
    expect(customCase('*', 'TESTING testing 123')).toBe('testing*testing*123');
  });
});
