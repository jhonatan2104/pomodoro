import React from 'react';

import { StatusBar } from 'react-native';
import { v1 } from 'uuid';
import Task from '~/components/Task';

import { Wrapper, TaskList } from './styles';
import { v1options } from '~/services/storage/POST/controllers/utils';

const Tasks = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Wrapper>
        <TaskList showsVerticalScrollIndicator={false}>
          {[1, 2, 3, 4, 1, 1, 1, 1].map((item, index) => (
            <Task key={v1(v1options)} mt={index && 16} />
          ))}
        </TaskList>
      </Wrapper>
    </>
  );
};

export default Tasks;
