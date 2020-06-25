import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '~/components';
import PomodoroItem from '~/components/PomodoroItem';
import { Container, Wrapper } from './styles';

const Home = () => {
  return (
    <>
      <StatusBar />
      <Wrapper>
        <PomodoroItem />
        <Container>
          <Button>Add pomodoro</Button>
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
