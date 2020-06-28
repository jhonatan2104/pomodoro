import { CREATE_POMODORO } from '../constants';
import Controllers from './controllers';

export default function ({ type, payload }) {
  switch (type) {
    case CREATE_POMODORO:
      return Controllers.createPomodoro({ payload });
    default:
      return new Promise((resolve, reject) => {
        reject(new Error('ACTION ERRO/STORAGE/POST'));
      });
  }
}
