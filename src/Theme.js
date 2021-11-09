import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryBackground: '#222266',
    secondaryBackground: '#3939ac',
    highlight: '#5353c6',
    disabled: '#202060',
    font: '#fafafa',
  },
};

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
