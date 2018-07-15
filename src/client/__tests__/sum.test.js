import sum from '../components/sum';

describe('Initial test group', () => {
  it(`adds 1 and 2`, () => {
    expect(sum(1, 2)).toBe(3);
  });
});
