/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */
import { read } from '../index';

const MAP_MOCK = new Map([
  ['1', { id: 1 }],
  ['2', { id: 2 }],
]);

const MAP_EMPTY = new Map([]);

const mockStorageDevice = {
  TABLE_MOCK: JSON.stringify(Array.from(MAP_MOCK.entries())),
  TABLE_MOCK_EMPTY: JSON.stringify(Array.from(MAP_EMPTY.entries())),
};

jest.mock('react-native', () => ({
  AsyncStorage: {
    getItem: jest.fn((item) => {
      return new Promise((resolve) => {
        resolve(mockStorageDevice[item]);
      });
    }),
  },
}));

describe('Storage/utils/read', () => {
  it('passando chave existente', async () => {
    await expect(read({ TABLE: 'TABLE_MOCK' })).resolves.toEqual(MAP_MOCK);
  });

  it('passando chave não existente', async () => {
    await expect(
      read({ TABLE: 'TABLE_MOCK_NOT_EXIST' })
    ).resolves.toBeUndefined();
  });

  it('lendo chave sem registros', async () => {
    await expect(read({ TABLE: 'TABLE_MOCK_EMPTY' })).resolves.toEqual(
      MAP_EMPTY
    );
  });
});
