import React from 'react';

import { Box, NativeBaseProvider } from 'native-base'
import Home from './src/pages/home';

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}

