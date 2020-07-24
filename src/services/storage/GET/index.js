import { INDEX_POMODORO } from '../constants';
import Controllers from './controllers';

export default function ({ type, payload }) {
  switch (type) {
    case INDEX_POMODORO:
      return Controllers.indexPomodoro({ payload });
    default:
      return new Promise((resolve, reject) => {
        reject(new Error('ACTION ERRO/STORAGE/GET'));
      });
  }
}
