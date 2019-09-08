import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body.light-mode {
    background-color: #fff;
    & h1, h2, p{
      color: #333;
    }
    transition: background-color 0.3s ease;
  }

  body.dark-mode {
    background-color: #1a1919;
  & h1, h2, p{
      color: #ccc;
    }
  }
`;

export const Main = styled.div`
  width: 100%;
  color: #333;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  margin: 0;
  padding-top: 80px;
  font-size: 48px;
`;

export const Point = styled.a`
  color: #fcc419;
  margin-left: 12px; /*TODO: Find the another way.*/
`;

export const Description = styled.h2`
  text-align: center;
`;

export const Row = styled.div`
  max-width: 880px;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Card = styled.a`
  padding: 18px 18px 24px;
  width: 220px;
  text-align: left;
  text-decoration: none;
  box-shadow: 0 0 0px 1px #9b9b9b;
  &:hover {
    box-shadow: 0 0 0px 1px #fab005;
  }
`;

export const ItemTitle = styled.h3`
  margin: 0;
  color: #067df7;
  font-size: 18px;
`;

export const ItemDescription = styled.p`
  margin: 0;
  padding: 12px 0 0;
  font-size: 13px;
  color: #333;
`;
