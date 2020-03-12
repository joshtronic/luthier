import { countWords } from '../../src';

describe('countWords', () => {
  it('should count the words in a string', () => {
    expect(countWords('testing')).toBe(1);
    expect(countWords('testing testing')).toBe(2);
  });
});
