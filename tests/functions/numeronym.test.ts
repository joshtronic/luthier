import { numeronym } from '../../src';

describe('numeronym', () => {
  it('should convert to numeronym', () => {
    expect(numeronym('a')).toBe('a');
    expect(numeronym('ab')).toBe('a1');
    expect(numeronym('abc')).toBe('a1c');
    expect(numeronym('accessibility')).toBe('a11y');
    expect(numeronym('INTERNATIONALIZATION')).toBe('I18N');
    expect(numeronym(' TESTING  testing')).toBe('T12g');
  });
});
