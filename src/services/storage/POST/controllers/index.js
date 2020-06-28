/* eslint-disable camelcase */
import { v4 as uuidv4 } from 'uuid';
import { read, write } from '../../utils';
import { validationPropPomodoro } from './utils';
import { TABLE_POMODORO } from '~/services/storage/constants';

const createPomodoro = ({ payload }) => {
  return new Promise((resolve, reject) => {
    const { pomodoro } = payload;
    if (validationPropPomodoro(pomodoro)) {
      read({
        TABLE: TABLE_POMODORO,
      }).then((data) => {
        const id_pomodoro = uuidv4();
        if (data) {
          data.set(id_pomodoro, { ...pomodoro, id: id_pomodoro });
          write({
            TABLE: TABLE_POMODORO,
            OBJECT: data,
          })
            .then(() => {
              resolve({
                status: 'sucessos',
                data: {
                  id: id_pomodoro,
                },
              });
            })
            .catch((error) => {
              reject(error);
            });
        } else {
          const new_map = new Map();
          new_map.set(id_pomodoro, { ...pomodoro, id: id_pomodoro });
          write({
            TABLE: TABLE_POMODORO,
            OBJECT: new_map,
          })
            .then(() => {
              resolve({
                status: 'sucessos',
                data: {
                  id: id_pomodoro,
                },
              });
            })
            .catch((error) => {
              reject(error);
            });
        }
      });
    } else {
      reject(new Error('Erro/STORAGE/Controllers/CreatePomodoro'));
    }
  });
};

export default {
  createPomodoro,
};
