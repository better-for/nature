import styled from 'styled-components';

export const TitleSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  display: flex;
  margin: 0;
  margin-top: ${(p) => p.theme.unit.glass._10};
  ${(p) => p.theme.typography.subHeroBold};
  text-align: center;
  @media ${(p) => p.theme.device.mobile} {
    font-size: ${(p) => p.theme.unit.glass._3};
  }
`;
