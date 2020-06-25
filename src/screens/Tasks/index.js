import React from 'react';
import { View } from 'react-native';

import Task from '~/components/Task';

// import { Container } from './styles';

const Tasks = () => {
  return (
    <View style={{ backgroundColor: '#2d2d2d', flex: 1 }}>
      <Task />
    </View>
  );
};

export default Tasks;
