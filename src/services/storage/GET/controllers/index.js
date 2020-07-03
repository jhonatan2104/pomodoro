import { read } from '../../utils';
import { TABLE_POMODORO } from '~/services/storage/constants';
import { convertMaptoArray } from './utils';

const indexPomodoro = () => {
  return new Promise((resolve) => {
    read({
      TABLE: TABLE_POMODORO,
    }).then((res) => {
      if (res) {
        resolve(convertMaptoArray(res));
      } else {
        resolve([]);
      }
    });
  });
};

export default {
  indexPomodoro,
};
