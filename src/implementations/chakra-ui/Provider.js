import React from 'react';
import { ThemeProvider, theme } from '@chakra-ui/core';
import View from './View';

const Provider = props => (
  <ThemeProvider theme={theme}>
    <View>{props.children}</View>
  </ThemeProvider>
);

export default Provider;
