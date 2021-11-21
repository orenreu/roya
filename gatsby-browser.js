import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/themes/theme';
import ReactThemeProvider from './src/context/ThemeProvider';

export const wrapRootElement = ({ element }) => (
  <ReactThemeProvider>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </ReactThemeProvider>
);
