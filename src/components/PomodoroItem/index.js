import React from 'react';
import { Box, Label } from '..';
import { Container, Configs } from './styles';

const PomodoroItem = () => {
  return (
    <Box
      mr={16}
      ml={16}
      roundedSm
      row
      justifyBetween
      bg="#5D676F40"
      paddingVertical={16}
      paddingHorizontal={12}
    >
      <Container>
        <Label color="#fff" size={18}>
          Pomodoro name
        </Label>
        <Label color="#fff" size={16}>
          Time expend
        </Label>
      </Container>

      <Configs>
        <Label color="#fff" size={16}>
          25 min
        </Label>
        <Label color="#fff" size={16}>
          1/4
        </Label>
      </Configs>
    </Box>
  );
};

export default PomodoroItem;
