import { rot13 } from '../../src';

describe('rot13', () => {
  it('should encode by rotating 13 places', () => {
    expect(rot13('testing')).toBe('grfgvat');
    expect(rot13('TESTING')).toBe('GRFGVAT');
  });
});
