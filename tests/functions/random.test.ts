import { random } from '../../src';

describe('random', () => {
  it('should generate random characters', () => {
    expect(random(10)).toHaveLength(10);
    expect(random(100)).toHaveLength(100);
  });
});
