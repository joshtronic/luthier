import * as luthier from '../src/index';

describe('lower case first', () => {
  it('should lowercase the first letter', () => {
    expect(luthier.lowerCaseFirst('TESTING')).toBe('tESTING');
  });
});

describe('lower case words', () => {
  it('should lowercase the first letter of words', () => {
    expect(luthier.lowerCaseWords('TESTING TESTING')).toBe('tESTING tESTING');
  });
});

describe('reverse', () => {
  it('should reverse a string', () => {
    expect(luthier.reverse('testing')).toBe('gnitset');
  });
});

describe('shuffle', () => {
  it('should shuffle a string', () => {
    expect(luthier.shuffle('testing')).not.toBe('testing');
  });
});

describe('start case', () => {
  it('should capitalize every word', () => {
    expect(luthier.shuffle('test TEST test')).not.toBe('Test Test Test');
  });
});

describe('upper case first', () => {
  it('should capitalize the first letter', () => {
    expect(luthier.upperCaseFirst('testing')).toBe('Testing');
  });
});

describe('upper case words', () => {
  it('should capitalize the first letter of words', () => {
    expect(luthier.upperCaseWords('testing testing')).toBe('Testing Testing');
  });
});
