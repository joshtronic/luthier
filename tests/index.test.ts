import * as Luthier from '../src/index';

describe('to upper case first', () => {
  it('should capitalize the first letter', () => {
    expect(Luthier.toUpperCaseFirst('testing')).toBe('Testing');
  });

  it('should error on non-strings', () => {
    // TODO
  });
});
