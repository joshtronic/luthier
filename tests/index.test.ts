import * as luthier from '../src/index';

describe('camelCase', () => {
  it('should convert to camel case', () => {
    expect(luthier.camelCase('TESTING')).toBe('testing');
    expect(luthier.camelCase('testing  Testing')).toBe('testingTesting');
    expect(luthier.camelCase('- TESTING - testing -')).toBe('testingTesting');
  });
});

// TODO
// describe('chunk', () => {
//   it('should chunk a string', () => {
//   });
// });

describe('constantCase', () => {
  it('should convert to constant case', () => {
    expect(luthier.constantCase('TESTING')).toBe('TESTING');
    expect(luthier.constantCase('testing  Testing')).toBe('TESTING_TESTING');
    expect(luthier.constantCase('- TESTING - testing -')).toBe('TESTING_TESTING');
  });
});

describe('countLines', () => {
  it('should count the lines in a string', () => {
    expect(luthier.countLines('testing')).toBe(1);
    expect(luthier.countLines('testing\r\ntesting')).toBe(2);
    expect(luthier.countLines('testing\rtesting')).toBe(2);
    expect(luthier.countLines('testing\ntesting')).toBe(2);
    expect(luthier.countLines('te\rs\nt\r\ning')).toBe(4);
  });
});

describe('countWords', () => {
  it('should count the words in a string', () => {
    expect(luthier.countWords('testing')).toBe(1);
    expect(luthier.countWords('testing testing')).toBe(2);
  });
});

describe('dotCase', () => {
  it('should convert to dot case', () => {
    expect(luthier.dotCase('TESTING')).toBe('testing');
    expect(luthier.dotCase('testing  Testing')).toBe('testing.testing');
    expect(luthier.dotCase('- TESTING - testing -')).toBe('testing.testing');
  });
});

describe('flip', () => {
  it('should flip upside down', () => {
    expect(luthier.flip(' testing, testing,  1234!')).toBe("¡߈Ɛᘔ⇂  'ɓuᴉʇsǝʇ 'ɓuᴉʇsǝʇ ");
    expect(luthier.flip("¡߈Ɛᘔ⇂  'ɓuᴉʇsǝʇ 'ɓuᴉʇsǝʇ ")).toBe(' testing, testing,  1234!');
  });
});

describe('initials', () => {
  it('should reduce to initials', () => {
    expect(luthier.initials(' testing  testing')).toBe('TT');
    expect(luthier.initials('Joshua John Sherman')).toBe('JJS');
  });
});

describe('kebabCase', () => {
  it('should convert to kebab case', () => {
    expect(luthier.kebabCase('TESTING')).toBe('testing');
    expect(luthier.kebabCase('testing  Testing')).toBe('testing-testing');
    expect(luthier.kebabCase('- TESTING - testing -')).toBe('testing-testing');
  });
});

// TODO
// describe('leet', () => {
//   it('should convert to leet', () => {
//     expect(luthier.leet(' TESTING  testing')).toBe(' 73571ng  73571ng');
//   });
// });

describe('lowerCaseFirst', () => {
  it('should lowercase the first letter', () => {
    expect(luthier.lowerCaseFirst('TESTING')).toBe('tESTING');
  });
});

describe('lowerCaseWords', () => {
  it('should lowercase the first letter of words', () => {
    expect(luthier.lowerCaseWords('TESTING TESTING')).toBe('tESTING tESTING');
  });
});

describe('numeronym', () => {
  it('should convert to numeronym', () => {
    expect(luthier.numeronym('a')).toBe('a');
    expect(luthier.numeronym('ab')).toBe('a1');
    expect(luthier.numeronym('abc')).toBe('a1c');
    expect(luthier.numeronym('accessibility')).toBe('a11y');
    expect(luthier.numeronym('INTERNATIONALIZATION')).toBe('I18N');
    expect(luthier.numeronym(' TESTING  testing')).toBe('T12g');
  });
});

describe('pascalCase', () => {
  it('should convert to pascal case', () => {
    expect(luthier.pascalCase('TESTING')).toBe('Testing');
    expect(luthier.pascalCase('testing  Testing')).toBe('TestingTesting');
    expect(luthier.pascalCase('- TESTING - testing -')).toBe('TestingTesting');
  });
});

// TODO
// describe('plural', () => {
//   it('should convert singler to plural', () => {
//     expect(luthier.plural('test')).toBe('tests');
//     expect(luthier.plural('fly')).toBe('flies');
//   });
// });

// TODO
// describe('possessive', () => {
//   it('should convert to possesive tense', () => {
//   });
// });

describe('random', () => {
  it('should generate random characters', () => {
    expect(luthier.random(10)).toHaveLength(10);
    expect(luthier.random(100)).toHaveLength(100);
  });
});

describe('reverse', () => {
  it('should reverse characters', () => {
    expect(luthier.reverse('testing')).toBe('gnitset');
  });
});

describe('rot13', () => {
  it('should encode by rotating 13 places', () => {
    expect(luthier.rot13('testing')).toBe('grfgvat');
    expect(luthier.rot13('TESTING')).toBe('GRFGVAT');
  });
});

describe('shuffle', () => {
  it('should shuffle characters', () => {
    const shuffled = luthier.shuffle('testing')
    expect(shuffled).not.toBe('testing');
    expect(shuffled).toHaveLength(7);
  });
});

// describe('singular', () => {
//   it('should convert to plural to singular', () => {
//     expect(luthier.singular('tests')).toBe('test');
//     expect(luthier.singular('flies')).toBe('fly');
//     expect(luthier.singular('calves')).toBe('calf');
//   });
// });

describe('snakeCase', () => {
  it('should convert to snake case', () => {
    expect(luthier.snakeCase('TESTING')).toBe('testing');
    expect(luthier.snakeCase('testing  Testing')).toBe('testing_testing');
    expect(luthier.snakeCase('- TESTING - testing -')).toBe('testing_testing');
  });
});

describe('startCase', () => {
  it('should capitalize every word', () => {
    expect(luthier.startCase('TESTING')).toBe('Testing');
    expect(luthier.startCase('testing  Testing')).toBe('Testing  Testing');
    expect(luthier.startCase('- TESTING - testing -')).toBe('- Testing - Testing -');
  });
});

describe('stripTags', () => {
  it('should strip tags', () => {
    expect(luthier.stripTags('<div>Testing</div>')).toBe('Testing');
    expect(luthier.stripTags('<div>Test</div><div>ing</div>')).toBe('Testing');
  });
});

describe('studlyCaps', () => {
  it('should convert to studly caps', () => {
    expect(luthier.studlyCaps('TESTING')).toBe('TeStInG');
    expect(luthier.studlyCaps('testing  Testing')).toBe('TeStInG  tEsTiNg');
  });
});

describe('upperCaseFirst', () => {
  it('should capitalize the first letter', () => {
    expect(luthier.upperCaseFirst('testing')).toBe('Testing');
  });
});

describe('upperCaseWords', () => {
  it('should capitalize the first letter of words', () => {
    expect(luthier.upperCaseWords('testing testing')).toBe('Testing Testing');
    expect(luthier.upperCaseWords(' testing  testing')).toBe(' Testing  Testing');
  });
});

describe('wordWrap', () => {
  it('should wrap words', () => {
    // TODO
  });
});
