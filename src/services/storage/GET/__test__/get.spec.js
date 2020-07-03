import GET from '../index';
import { INDEX_POMODORO } from '../../constants';

jest.mock('../controllers', () => ({
  indexPomodoro: jest.fn(() => {
    return new Promise((resolve) => {
      resolve([1, 2, 3]);
    });
  }),
}));

describe('Storage/Get/reducers', () => {
  it('passando action válida', async () => {
    await expect(
      GET({
        type: INDEX_POMODORO,
      })
    ).resolves.toEqual([1, 2, 3]);
  });

  it('passando action não válida', async () => {
    await expect(
      GET({
        type: 'NOT_VALID',
      })
    ).rejects.toThrow('ACTION ERRO/STORAGE/GET');
  });
});
