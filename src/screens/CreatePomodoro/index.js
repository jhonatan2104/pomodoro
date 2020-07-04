import React from 'react';
import { StatusBar, View } from 'react-native';
import PomodoroForm from './PomodoroForm';

// import { Container } from './styles';

const CreatePomodoro = () => {
  return (
    <View>
      <StatusBar translucent barStyle="light-content" />
      <PomodoroForm />
    </View>
  );
};

export default CreatePomodoro;
