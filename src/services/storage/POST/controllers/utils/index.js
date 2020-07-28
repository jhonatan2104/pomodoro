/* eslint-disable no-prototype-builtins */

export const validationPropConfig = (config) => {
  if (config instanceof Object) {
    const propsValid = [
      config.hasOwnProperty('duration'),
      config.hasOwnProperty('long_interval'),
      config.hasOwnProperty('short_interval'),
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
      // pomodoro.hasOwnProperty('log'),
      // pomodoro.hasOwnProperty('icon'),
      validationPropConfig(pomodoro.config),
    ];

    return propsValid.every((res) => res);
  }
  return false;
};

export const v1options = {
  node: [0x01, 0x23, 0x45, 0x67, 0x89, 0xab],
  clockseq: 0x1234,
  msecs: new Date().getTime(),
};
