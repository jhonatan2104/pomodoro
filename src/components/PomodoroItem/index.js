/* eslint-disable object-curly-newline */
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { Box, Label } from '..';
import { Container, Configs, Wrapper } from './styles';

const PomodoroItem = ({ ml, mb, mt, mr }) => {
  const pomodoro = {
    name: 'Pomodoro name',
    config: {
      focusSize: 20,
      cicleSize: 4,
    },
    timeCount: 60,
  };
  return (
    <Box
      roundedSm
      row
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      justifyBetween
      bg="#5D676F40"
      paddingVertical={16}
      paddingHorizontal={12}
    >
      <Wrapper>
        <FontAwesome name="clock-o" color="#6D7CFF" size={38} />
        <Container>
          <Label color="#fff" size={18}>
            {pomodoro.name}
          </Label>
          <Label color="#fff" size={16}>
            {`${pomodoro.timeCount}minutes`}
          </Label>
        </Container>
      </Wrapper>

      <Configs>
        <Label color="#fff" size={16}>
          {pomodoro.config.focusSize}
        </Label>
        <Label color="#fff" size={16}>
          {pomodoro.config.cicleSize}
        </Label>
      </Configs>
    </Box>
  );
};

PomodoroItem.propTypes = {
  ml: PropTypes.oneOfType([PropTypes.number]),
  mr: PropTypes.oneOfType([PropTypes.number]),
  mt: PropTypes.oneOfType([PropTypes.number]),
  mb: PropTypes.oneOfType([PropTypes.number]),
  // TODO
  // Assert pomodoro object shape
  pomodoro: PropTypes.shape({
    name: PropTypes.string,
    config: PropTypes.shape({
      cicleSize: PropTypes.number,
      focusSize: PropTypes.number,
    }),
    timeCount: PropTypes.number,
  }).isRequired,
};

PomodoroItem.defaultProps = {
  ml: 0,
  mr: 0,
  mt: 0,
  mb: 0,
};
export default PomodoroItem;
