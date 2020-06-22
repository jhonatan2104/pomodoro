# DOC CircularProgress

```jsx
// Import
import React from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import { timing } from 'react-native-redash';
import CircularProgress from './index';

// Constants

const { Clock } = Animated;
const clock = new Clock();

const runTiming = timing({
  clock,
  duration: 10 * 1000,
  from: 0,
  to: 1,
  easing: Easing.linear,
});

//  Component
const App = () => <CircularProgress progress={runTiming} />;

export default App;
```
