import React from 'react';
import { StatusBar } from 'react-native';
import { Button } from '~/components';
import { Container, Wrapper } from './styles';

const Home = () => {
  return (
    <Wrapper>
      <StatusBar hidden />
      <Container>
        <Button>Add pomodoro</Button>
      </Container>
    </Wrapper>
  );
};

export default Home;
