import { countLines } from '../../src';

describe('countLines', () => {
  it('should count the lines in a string', () => {
    expect(countLines('testing')).toBe(1);
    expect(countLines('testing\r\ntesting')).toBe(2);
    expect(countLines('testing\rtesting')).toBe(2);
    expect(countLines('testing\ntesting')).toBe(2);
    expect(countLines('te\rs\nt\r\ning')).toBe(4);
  });
});
