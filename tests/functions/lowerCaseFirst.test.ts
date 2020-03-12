import { lowerCaseFirst } from '../../src';

describe('lowerCaseFirst', () => {
  it('should lowercase the first letter', () => {
    expect(lowerCaseFirst('TESTING')).toBe('tESTING');
  });
});
