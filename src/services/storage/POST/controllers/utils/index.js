/* eslint-disable no-prototype-builtins */

export const validationPropConfig = (config) => {
  if (config instanceof Object) {
    const propsValid = [
      config.hasOwnProperty('duration'),
      config.hasOwnProperty('long_inteval'),
      config.hasOwnProperty('short_inteval'),
      config.hasOwnProperty('cicle_size'),
    ];

    return propsValid.every((res) => res);
  }
  return false;
};

export const validationPropPomodoro = (pomodoro) => {
  if (pomodoro instanceof Object) {
    const propsValid = [
      pomodoro.hasOwnProperty('name'),
      pomodoro.hasOwnProperty('config'),
      pomodoro.hasOwnProperty('log'),
      pomodoro.hasOwnProperty('icon'),
      validationPropConfig(pomodoro.config),
    ];

    return propsValid.every((res) => res);
  }
  return false;
};
