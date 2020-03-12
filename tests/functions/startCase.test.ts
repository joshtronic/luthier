import { startCase } from '../../src';

describe('startCase', () => {
  it('should capitalize every word', () => {
    expect(startCase('TESTING')).toBe('Testing');
    expect(startCase('testing  Testing')).toBe('Testing  Testing');
    expect(startCase('- TESTING - testing -')).toBe('- Testing - Testing -');
    expect(startCase('TESTING testing 123')).toBe('Testing Testing 123');
  });
});
