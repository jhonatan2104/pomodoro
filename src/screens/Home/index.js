import React from 'react';
import { StatusBar } from 'react-native';
import PomodoroItem from '~/components/PomodoroItem';
import { Button, Wrapper, PomodorosList } from './styles';

const Home = () => {
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
        <PomodorosList>
          {mockPomodoros.map((item, index) => (
            <PomodoroItem
              key={Math.random() * 10}
              pomodoro={item}
              mt={index && 12}
            />
          ))}
        </PomodorosList>

        <Button>Add pomodoro</Button>
      </Wrapper>
    </>
  );
};

export default Home;
