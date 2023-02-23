import React, { useState, createContext } from 'react';
import { Brand } from './Brand';
import { Container } from './Container';
import { GlobalStyle } from './GlobalStyle';
//import { Card } from './Card';
import { Chart } from './Chart';
//Add dependency > yarn add @mui/material @emotion/styled @emotion/react
import { VirtualizedTable } from './Table';
//Add dependency > yarn add react-virtualized
import 'react-virtualized/styles.css';
import { DarkSwitch } from './DarkSwitch';

export const ThemeContext = createContext();

export default function Dashboard() {
  const themeState = useState('light');
  const [theme, setTheme] = themeState;
  const dark = theme === 'dark';
  return (
    <ThemeContext.Provider value={themeState}>
      <GlobalStyle dark={dark} />
      <Container>
        <Brand />
        <DarkSwitch />
        <Chart />
        <VirtualizedTable />
      </Container>
    </ThemeContext.Provider>
  );
}