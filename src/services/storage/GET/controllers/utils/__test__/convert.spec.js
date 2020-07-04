import { convertMaptoArray } from '../index';

describe('Storage/Get/Controllers/Utils/Convert', () => {
  it('passando instância de Map', () => {
    const ARRAY_VALID = [1, 2, 3];
    const MAP = new Map([
      [1, 1],
      [2, 2],
      [3, 3],
    ]);

    expect(convertMaptoArray(MAP)).toEqual(ARRAY_VALID);
  });
});
