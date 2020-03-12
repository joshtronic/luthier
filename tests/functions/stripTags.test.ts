import { stripTags } from '../../src';

describe('stripTags', () => {
  it('should strip tags', () => {
    expect(stripTags('<div>Testing</div>')).toBe('Testing');
    expect(stripTags('<div>Test</div><div>ing</div>')).toBe('Testing');
  });
});
