import { containsNumbers } from '../../src';

describe('containsNumbers', () => {
  it('should determine if a string contains any numbers', () => {
    expect(containsNumbers('TESTING')).toBeFalsy();
    expect(containsNumbers('testing')).toBeFalsy();
    expect(containsNumbers('Testing Testing 123')).toBeTruthy();
    expect(containsNumbers('123!!~!')).toBeTruthy();
  });
});
