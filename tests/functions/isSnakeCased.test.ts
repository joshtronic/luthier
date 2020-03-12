import { isSnakeCased } from '../../src';

describe('isSnakeCased', () => {
  it('should detect if string is snake cased', () => {
    expect(isSnakeCased('testing')).toBeTruthy();
    expect(isSnakeCased('Testing testing')).toBeFalsy();
    expect(isSnakeCased('- testing')).toBeFalsy();
    expect(isSnakeCased('testing_Testing')).toBeFalsy();
    expect(isSnakeCased('testing_testing')).toBeTruthy();
    expect(isSnakeCased('testing_testing_123')).toBeTruthy();
  });
});
