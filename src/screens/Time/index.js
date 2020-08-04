import React, { useMemo, useState } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { timing } from 'react-native-redash';
import { CircularProgressPerfect, Button } from '~/components';

import { Container } from './styles';

const Time = () => {
  const [start, setStart] = useState(false);
  const { Clock } = Animated;
  const clock = new Clock();

  const runTiming = useMemo(() => {
    const to = start ? 1 : 0;

    return timing({
      clock,
      duration: 10 * 1000,
      from: 0,
      to,
      easing: Easing.linear,
    });
  }, [start]);

  return (
    <Container>
      <CircularProgressPerfect progress={runTiming} />
      <Button mode="light" onPress={() => setStart(!start)}>
        {start ? 'RESET' : 'START'}
      </Button>
    </Container>
  );
};

export default Time;
