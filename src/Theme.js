import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryBackground: '#222266',
    secondaryBackground: '#222288',
    headerBackground: '#d6d6f5',
  },
};

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
