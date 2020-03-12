import { lowerCaseWords } from '../../src';

describe('lowerCaseWords', () => {
  it('should lowercase the first letter of words', () => {
    expect(lowerCaseWords('TESTING TESTING')).toBe('tESTING tESTING');
  });
});
