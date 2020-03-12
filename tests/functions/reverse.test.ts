import { reverse } from '../../src';

describe('reverse', () => {
  it('should reverse characters', () => {
    expect(reverse('testing')).toBe('gnitset');
  });
});
