import React from 'react';
import { Text } from 'react-native';
import { timing } from 'react-native-redash';
import Animated, { Easing } from 'react-native-reanimated';
import { Box, CircularProgress, Button } from '../../components';
import styles from './styles';

// Constants

const { Clock } = Animated;
const clock = new Clock();

const timingConfig = timing({
  clock,
  duration: 5 * 1000,
  from: 0,
  to: 1,
  easing: Easing.linear,
});

// import { Container } from './styles';

const Time = () => {
  return (
    <Box width="100%" height="100%">
      <CircularProgress progress={timingConfig} />
      <Box
        row
        self="center"
        width="100%"
        justifyAround
        style={styles.buttonContainer}
      >
        <Button mode="dark" width={152}>
          <Text>Stop</Text>
        </Button>
        <Button mode="light" width={152}>
          <Text>Pause</Text>
        </Button>
      </Box>
    </Box>
  );
};

export default Time;
