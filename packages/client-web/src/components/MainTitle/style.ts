import styled from 'styled-components';

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
