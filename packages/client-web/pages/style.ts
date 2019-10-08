import { createGlobalStyle } from 'styled-components';
import { styled } from '@nature/element';
import { Paragraph } from '../components/common/paragraph';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    font-family: 'Noto Sans KR', sans-serif;
    /* font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif; */
  }
  body.light-mode {
    background-color: #fff;
    & h1, h2, p{
      /* color: #333; */
    }
    transition: background-color 0.3s ease;
  }

  body.dark-mode {
    background-color: #1a1919;
  & h1, h2, p{
      /* color: #ccc; */
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
  color: ${p => p.theme.color.black};
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

export const Card = styled.a`
  padding: ${p => p.theme.unit.leaf._4} ${p => p.theme.unit.leaf._4}
    ${p => p.theme.unit.leaf._5};
  width: ${p => p.theme.unit.glass._26};
  text-align: left;
  text-decoration: none;
  box-shadow: 0 0 0px 1px ${p => p.theme.color.gray};
  &:hover {
    box-shadow: 0 0 0px 1px ${p => p.theme.color.primaryVariant};
  }
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: ${p => p.theme.color.secondary};
  ${p => p.theme.typography.paragraphNormal};
`;

export const ItemDescription = styled.p`
  margin: 0;
  padding: ${p => p.theme.unit.leaf._3} 0 0;
  ${p => p.theme.typography.labelNormal};
  color: ${p => p.theme.color.black};
`;

export const StyledParagraph = styled(Paragraph)`
  width: ${p => p.theme.unit.glass._47};
  color: ${p => p.theme.color.primaryVariant};
  margin: ${p => p.theme.unit.glass._7} ${p => p.theme.unit.leaf._4}
    ${p => p.theme.unit.leaf._8};
  // padding: ${p => p.theme.unit.leaf._4};
  word-break: break-all;
  &:hover {
    box-shadow: 0 0 0 1px ${p => p.theme.color.primaryVariant};
  }
  /* background-color: red; */
`;
