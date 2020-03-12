import { camelCase } from '../../src';

describe('camelCase', () => {
  it('should convert to camel case', () => {
    expect(camelCase('TESTING')).toBe('testing');
    expect(camelCase('testing  Testing')).toBe('testingTesting');
    expect(camelCase('- TESTING - testing -')).toBe('testingTesting');
    expect(camelCase('TESTING testing 123')).toBe('testingTesting123');
  });
});
