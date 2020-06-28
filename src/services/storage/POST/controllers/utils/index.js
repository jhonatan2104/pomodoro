/* eslint-disable no-prototype-builtins */
export const validationPropPomodoro = (pomodoro) => {
  if (pomodoro instanceof Object) {
    const propsValid = [
      pomodoro.hasOwnProperty('name'),
      pomodoro.hasOwnProperty('config'),
      pomodoro.hasOwnProperty('log'),
      pomodoro.hasOwnProperty('icon'),
    ];

    return propsValid.every((res) => res);
  }
  return false;
};
