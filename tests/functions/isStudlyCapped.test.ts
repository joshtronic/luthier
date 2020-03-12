import { isStudlyCapped } from '../../src';

describe('isStudlyCapped', () => {
  it('should detect if string is studly capped', () => {
    expect(isStudlyCapped('testing')).toBeFalsy();
    expect(isStudlyCapped('TESTING')).toBeFalsy();
    expect(isStudlyCapped('Testing testing')).toBeFalsy();
    expect(isStudlyCapped('- testing')).toBeFalsy();
    expect(isStudlyCapped('TeStInG testing')).toBeFalsy();
    expect(isStudlyCapped('TeStInGtEsTiNg')).toBeTruthy();
  });
});
