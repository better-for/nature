import { createGlobalStyle } from 'styled-components';
import { styled, Theme } from '../../../src/element';

type Props = {
  theme: Theme;
  isDarkTheme: boolean;
};

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    margin: 0;
    padding: 0;
    // font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
    background-color: ${({ isDarkTheme, theme: { dark, light } }) =>
      isDarkTheme ? dark.bg.secondary : light.bg.secondary};
    transition: background-color 0.3s ease;
    color: ${({ isDarkTheme, theme: { dark, light } }) =>
      isDarkTheme ? dark.text.secondary : light.text.secondary};
    & h1 {
      color: ${({ isDarkTheme, theme: { dark, light } }) =>
        isDarkTheme ? dark.text.primary : light.text.primary};
    }
    & h2, p, button {
      color: ${({ isDarkTheme, theme: { dark, light } }) =>
        isDarkTheme ? dark.text.secondary : light.text.secondary};
    }
  }
  @media (prefers-dark-interface) { 
    background-color: ${({ theme: { dark } }) => dark.bg.secondary};
    color: ${({ theme: { dark } }) => dark.text.secondary};
    & h1 {
      color: ${({ theme: { dark } }) => dark.text.primary};
    }
    & h2, p, button {
      color: ${({ theme: { dark } }) => dark.text.secondary};
    }
  }
`;

export const ChildrenContainer = styled.div`
  margin-top: ${p => p.theme.unit.glass._4};
`;
