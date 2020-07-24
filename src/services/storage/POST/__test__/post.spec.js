import POST from '../index';
import { CREATE_POMODORO } from '../../constants';

jest.mock('../controllers', () => ({
  createPomodoro: jest.fn(() => {
    return new Promise((resolver) => {
      resolver('success');
    });
  }),
}));

describe('Storage/Post/reducers', () => {
  it('passando action válida', async () => {
    await expect(
      POST({
        type: CREATE_POMODORO,
        payload: {},
      })
    ).resolves.toBe('success');
  });

  it('passando action não válida', async () => {
    await expect(
      POST({
        type: 'NOT_VALID',
        payload: {},
      })
    ).rejects.toThrow('ACTION ERRO/STORAGE/POST');
  });
});
