import React from 'react';
import { StatusBar } from 'react-native';

import PomodoroItem from '~/components/PomodoroItem';
import { Button, Wrapper, PomodorosList } from './styles';

import mockPomodoros from '~/mock/pomodoros.json';

const PomodoroList = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Wrapper>
        <PomodorosList showsVerticalScrollIndicator={false}>
          {mockPomodoros.map((item, index) => (
            <PomodoroItem
              key={Math.random() * 10}
              pomodoro={item}
              mt={index && 16}
            />
          ))}
        </PomodorosList>

        <Button
          mode="light"
          onPress={() => {
            navigation.navigate('CreatePomodoro');
          }}
        >
          Add pomodoro
        </Button>
      </Wrapper>
    </>
  );
};

export default PomodoroList;
