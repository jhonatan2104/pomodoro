import { validationPropPomodoro } from '../index';

const POMODORO = {
  name: 'name',
  config: {},
  log: {},
  icon: '',
};

describe('Storage/Post/Controllers/Utils/Validations', () => {
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
