import styled, { keyframes } from 'styled-components';
import { color } from 'src/element';

export const Container = styled.div`
  display: inline-block;
  width: ${p => p.theme.unit.glass._18};
  @media ${p => p.theme.device.mobile} {
    width: ${p => p.theme.unit.glass._12};
  }
`;

const pathFill = keyframes`
  to {
    stroke-dashoffset: 0;
    fill: ${color.primaryVariant};
  }
`;

export const BetterPath = styled.path`
  stroke: ${p => p.theme.color.primaryVariant};
  stroke-width: 2;
  fill: transparent;
  stroke-dasharray: 700;
  stroke-dashoffset: 700;
  animation: ${pathFill} 2s linear both;
  animation-iteration-count: 1;
`;

export const ForPath = styled(BetterPath)`
  animation: ${pathFill} 2s linear 0.4s both;
`;

export const UnderBar = styled(BetterPath)`
  animation: ${pathFill} 2s linear 0.8s both;
`;