import { initials } from '../../src';

describe('initials', () => {
  it('should reduce to initials', () => {
    expect(initials(' testing  testing')).toBe('TT');
    expect(initials('Joshua John Sherman')).toBe('JJS');
  });
});
