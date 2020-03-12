import { isCapitalized } from '../../src';

describe('isCapitalized', () => {
  it('should detect capitalization', () => {
    expect(isCapitalized('testing')).toBeFalsy();
    expect(isCapitalized('Testing')).toBeTruthy();
    expect(isCapitalized('TESTING')).toBeTruthy();
    expect(isCapitalized('- Testing')).toBeFalsy();
  });
});
