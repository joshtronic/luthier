import { studlyCaps } from '../../src';

describe('studlyCaps', () => {
  it('should convert to studly caps', () => {
    expect(studlyCaps('TESTING')).toBe('TeStInG');
    expect(studlyCaps('testing  Testing')).toBe('TeStInGtEsTiNg');
    expect(studlyCaps('- TESTING - testing -')).toBe('TeStInGtEsTiNg');
  });
});
