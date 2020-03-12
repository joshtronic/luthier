import { flip } from '../../src';

describe('flip', () => {
  it('should flip upside down', () => {
    expect(flip(' testing, testing,  1234!')).toBe("¡߈Ɛᘔ⇂  'ɓuᴉʇsǝʇ 'ɓuᴉʇsǝʇ ");
    expect(flip("¡߈Ɛᘔ⇂  'ɓuᴉʇsǝʇ 'ɓuᴉʇsǝʇ ")).toBe(' testing, testing,  1234!');
  });
});
