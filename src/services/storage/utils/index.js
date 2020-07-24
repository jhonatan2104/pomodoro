/* eslint-disable prefer-promise-reject-errors */
import { AsyncStorage } from 'react-native';

export const write = ({ TABLE, OBJECT }) => {
  return new Promise((resolve, reject) => {
    if (OBJECT instanceof Map) {
      AsyncStorage.setItem(TABLE, JSON.stringify(Array.from(OBJECT.entries())))
        .then(() => {
          resolve('OK');
        })
        .catch(() => {
          reject(new Error('Erro/STORAGE/WRITE'));
        });
    } else {
      reject(new Error('Erro/STORAGE/WRITE'));
    }
  });
};

export const read = ({ TABLE }) => {
  return new Promise((resolve) => {
    AsyncStorage.getItem(TABLE)
      .then((response) => {
        if (response) {
          resolve(new Map(JSON.parse(response)));
        } else {
          resolve(undefined);
        }
      })
      .catch(() => {
        resolve(undefined);
      });
  });
};
