import { shuffle } from '../../src';

describe('shuffle', () => {
  it('should shuffle characters', () => {
    const shuffled = shuffle('testing');
    expect(shuffled).not.toBe('testing');
    expect(shuffled).toHaveLength(7);
  });
});
