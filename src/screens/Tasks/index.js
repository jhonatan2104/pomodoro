import React from 'react';

import { StatusBar } from 'react-native';
import Task from '~/components/Task';

import { Wrapper, TaskList } from './styles';

const Tasks = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Wrapper>
        <TaskList showsVerticalScrollIndicator={false}>
          {[1, 2, 3, 4, 1, 1, 1, 1].map((item, index) => (
            <Task mt={index && 16} />
          ))}
        </TaskList>
      </Wrapper>
    </>
  );
};

export default Tasks;
