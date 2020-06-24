import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import Routers from './src/routers';

import theme from './src/theme';

export default function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <Routers />
    </ThemeProvider>
  );
}
