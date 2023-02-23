//Add dependency > yarn add styled-components
import { createGlobalStyle } from 'styled-components';

export const red = '#ff0000';
export const darkerGrey = '#353131';
export const darkGrey = '#515263';
export const medGrey = '#dad9d9';
export const lightGrey = '#0000ff';
export const brandColor = '#1DDA65';

export const GlobalStyle = createGlobalStyle`
  body {
    h1 {
      ${({ dark }) => dark && `color: ${brandColor};`};  
    }
    color: ${darkGrey}; 
    background-color: ${({ dark }) => (dark ? red : lightGrey)};  
    font-family: 'Blinker', sans-serif;
  }
`;