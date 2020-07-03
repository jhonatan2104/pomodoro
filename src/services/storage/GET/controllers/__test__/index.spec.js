import Controllers from '../index';
import { TABLE_POMODORO } from '~/services/storage/constants';

const MAP_MOCK = new Map([
  [1, 1],
  [2, 2],
  [3, 3],
]);

const mockStorageDevice = {};

jest.mock('react-native', () => ({
  AsyncStorage: {
    getItem: jest.fn((item) => {
      return new Promise((resolve) => {
        resolve(mockStorageDevice[item]);
      });
    }),
  },
}));

describe('Storage/Get/Controllers/Index', () => {
  it('recebendo valores da TABLE_POMODORO não existente', async () => {
    await expect(Controllers.indexPomodoro()).resolves.toEqual([]);
  });

  it('recebendo valores da TABLE_POMODORO', async () => {
    mockStorageDevice[TABLE_POMODORO] = JSON.stringify(
      Array.from(MAP_MOCK.entries())
    );

    await expect(Controllers.indexPomodoro()).resolves.toEqual([1, 2, 3]);
  });
});
