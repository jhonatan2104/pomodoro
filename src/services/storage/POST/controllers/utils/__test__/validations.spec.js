import { validationPropPomodoro, validationPropConfig } from '../index';

const CONFIG = {
  duration: 5,
  long_inteval: 4,
  short_inteval: 2,
  cicle_size: 6,
};

const POMODORO = {
  name: 'name',
  config: CONFIG,
  log: {},
  icon: '',
};

describe('Storage/Post/Controllers/Utils/Validations/Pomodoro', () => {
  it('passando pomodoro válido', () => {
    expect(validationPropPomodoro(POMODORO)).toBe(true);
  });
  it('passando pomodoro inválido', () => {
    expect(validationPropPomodoro({})).toBe(false);
  });
  it('passando parâmetro sem ser Object', () => {
    expect(validationPropPomodoro('')).toBe(false);
  });
});

describe('Storage/Post/Controllers/Utils/Validations/Config', () => {
  it('passando config válido', () => {
    expect(validationPropConfig(CONFIG)).toBe(true);
  });
  it('passando config inválido', () => {
    expect(validationPropConfig({})).toBe(false);
  });
  it('passando parâmetro sem ser Object', () => {
    expect(validationPropConfig('')).toBe(false);
  });
});
