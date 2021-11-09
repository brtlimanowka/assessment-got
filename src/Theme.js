import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primaryBackground: '#222266',
    secondaryBackground: '#3939ac',
    highlight: '#5353c6',
    disabled: '#202060',
    font: '#fafafa',
    tablePrimary: '#202060',
    tableFont: '#d9d9f2',
  },
};

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
