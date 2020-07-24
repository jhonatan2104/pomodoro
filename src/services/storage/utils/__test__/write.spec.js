import { write } from '../index';

const MAP_MOCK = new Map([
  ['1', { id: 1 }],
  ['2', { id: 2 }],
]);

const MAP_NEW_MOCK = new Map([
  ['3', { id: 3 }],
  ['4', { id: 4 }],
]);

const mockStorageDevice = {
  TABLE_MOCK: JSON.stringify(Array.from(MAP_MOCK.entries())),
};

jest.mock('react-native', () => ({
  AsyncStorage: {
    setItem: jest.fn((item, value) => {
      return new Promise((resolve) => {
        mockStorageDevice[item] = value;
        resolve(value);
      });
    }),
  },
}));

describe('Storage/utils/write', () => {
  it('escrevendo em chave existente', async () => {
    await write({
      TABLE: 'TABLE_MOCK',
      OBJECT: MAP_NEW_MOCK,
    });

    expect(mockStorageDevice.TABLE_MOCK).toEqual(
      JSON.stringify(Array.from(MAP_NEW_MOCK.entries()))
    );
  });

  it('escrevendo em chave não existente', async () => {
    await write({
      TABLE: 'TABLE_NEW_MOCK',
      OBJECT: MAP_NEW_MOCK,
    });

    expect(mockStorageDevice.TABLE_NEW_MOCK).toEqual(
      JSON.stringify(Array.from(MAP_NEW_MOCK.entries()))
    );
  });

  it('passando parâmetro de OBJECT sem ser Map', async () => {
    await expect(
      write({
        TABLE: 'TABLE_MOCK',
        OBJECT: 'parâmetro errado',
      })
    ).rejects.toThrow('Erro/STORAGE/WRITE');
  });
});
