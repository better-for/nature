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
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
    background-color: ${({ isDarkTheme, theme: { dark, light } }) =>
      isDarkTheme ? dark.bg.secondary : light.bg.secondary};
    transition: background-color 0.3s ease;
    color: ${({ isDarkTheme, theme: { dark, light } }) =>
      isDarkTheme ? dark.text.secondary : light.text.secondary};
    & h1 {
      color: ${({ isDarkTheme, theme: { dark, light } }) =>
        isDarkTheme ? dark.text.primary : light.text.primary};
    }
    & h2, p, button{
      color: ${({ isDarkTheme, theme: { dark, light } }) =>
        isDarkTheme ? dark.text.secondary : light.text.secondary};
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  color: ${p => p.theme.color.gray};
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  margin: 0;
  padding-top: ${p => p.theme.unit.glass._10};
  ${p => p.theme.typography.heroBold};
`;

export const Point = styled.a`
  color: ${p => p.theme.color.primary};
  margin-left: ${p => p.theme.unit.leaf._3};
`;

export const Description = styled.h2`
  text-align: center;
`;

export const Row = styled.div`
  max-width: ${p => p.theme.size.mobile};
  margin: ${p => p.theme.unit.glass._10} auto ${p => p.theme.unit.glass._5};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const SampleCard = styled.a`
  padding: ${p => p.theme.unit.leaf._4} ${p => p.theme.unit.leaf._4}
    ${p => p.theme.unit.leaf._5};
  width: ${p => p.theme.unit.glass._26};
  text-align: left;
  text-decoration: none;
  box-shadow: 0 0 0px 1px ${p => p.theme.color.gray};
  &:hover {
    box-shadow: 0 0 1px 1px ${p => p.theme.color.primaryVariant};
  }
  cursor: pointer;
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: ${p => p.theme.color.secondary};
  ${p => p.theme.typography.paragraphNormal};
`;

export const BackButton = styled.button`
  background-color: inherit;
  outline: none;
  border: none;
  position: fixed;
  top: 24px;
  left: 16px;
  display: flex;
  color: ${p => p.theme.color.secondary};
  ${p => p.theme.typography.titleBold};
  cursor: pointer;
`;

export const ItemDescription = styled.p`
  margin: 0;
  padding: ${p => p.theme.unit.leaf._3} 0 0;
  ${p => p.theme.typography.labelNormal};
  color: ${p => p.theme.color.black};
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${p => p.theme.unit.glass._10} 10% 0;
  @media ${p => p.theme.device.mobile} {
    margin: ${p => p.theme.unit.glass._10} ${p => p.theme.unit.leaf._4};
  }
`;

export const FloatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: ${p => p.theme.unit.glass._8};
  right: ${p => p.theme.unit.glass._3};
`;

export const ToggleContainer = styled.div``;

export const I18nButton = styled.button`
  border: 2px solid ${p => p.theme.color.primaryVariant};
  border-radius: 20px;
  outline: none;
  background-color: inherit;
  width: 80px;
  height: 40px;
  cursor: pointer;
  ${p => p.theme.typography.labelBold};
`;
