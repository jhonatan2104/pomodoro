import React from 'react';
import { Box, Label } from '..';
import { Container, Tag } from './styles';

import theme from '~/theme';

const Task = () => {
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
      alignCenter
    >
      <Box row alignCenter>
        <Tag
          backgroundColor={`${theme.colors.importancy.red}20`}
          borderColor={theme.colors.importancy.red}
        />

        <Container>
          <Label color="#fff" size={18}>
            Task name
          </Label>
          <Label color="#fff" size={16}>
            30 minutes
          </Label>
        </Container>
      </Box>
      <Tag backgroundColor="#c4c4c420" />
    </Box>
  );
};

export default Task;
