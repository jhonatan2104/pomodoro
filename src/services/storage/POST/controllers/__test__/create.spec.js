import Controllers from '../index';
import { TABLE_POMODORO } from '../../../constants';
import { read } from '../../../utils';

const OBJECT_POMODORO = {
  name: 'name',
  config: {
    duration: 5,
    long_inteval: 4,
    short_inteval: 2,
    cicle_size: 6,
  },
  log: {},
  icon: '',
};

const mockStorageDevice = {};

jest.mock('react-native', () => ({
  AsyncStorage: {
    getItem: jest.fn((item) => {
      return new Promise((resolve) => {
        resolve(mockStorageDevice[item]);
      });
    }),
    setItem: jest.fn((item, value) => {
      return new Promise((resolve) => {
        mockStorageDevice[item] = value;
        resolve(value);
      });
    }),
  },
}));

describe('Storage/Post/Controllers/Create', () => {
  it('criando pomodoro com AsyncStorage vazio', async () => {
    const responce = await Controllers.createPomodoro({
      payload: {
        pomodoro: OBJECT_POMODORO,
      },
    });

    expect(responce.status).toBe('sucessos');

    const MAP_POMODORO = await read({ TABLE: TABLE_POMODORO });

    expect(MAP_POMODORO).toBeDefined();

    expect(MAP_POMODORO.get(responce.data.id)).toEqual({
      ...OBJECT_POMODORO,
      id: responce.data.id,
    });
  });

  it('criando pomodoro com chave existente no AsyncStorage', async () => {
    const responce = await Controllers.createPomodoro({
      payload: {
        pomodoro: OBJECT_POMODORO,
      },
    });

    expect(responce.status).toBe('sucessos');

    const MAP_POMODORO = await read({ TABLE: TABLE_POMODORO });

    expect(MAP_POMODORO).toBeDefined();

    expect(MAP_POMODORO.size).toBe(2);
  });

  it('passando objeto inválido como parâmento', async () => {
    await expect(
      Controllers.createPomodoro({
        prop_erro: {
          prop_erro: 'prop_erro',
        },
      })
    ).rejects.toThrow();

    const MAP_POMODORO = await read({ TABLE: TABLE_POMODORO });

    expect(MAP_POMODORO.size).toBe(2);
  });
});
