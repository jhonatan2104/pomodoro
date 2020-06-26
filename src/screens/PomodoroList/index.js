import React from 'react';
import { StatusBar } from 'react-native';

import PomodoroItem from '~/components/PomodoroItem';
import { Button, Wrapper, PomodorosList } from './styles';

const PomodoroList = ({ navigation }) => {
  const mockPomodoros = [
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
    {
      name: 'Pomodoro name',
      config: {
        focusSize: 20,
        cicleSize: 4,
        timeCount: 60,
      },
    },
  ];

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
