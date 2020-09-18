import { YAxis } from 'recharts';
import styled from 'styled-components';

export const Title = styled.div`
  text-align: center;
  margin: ${p => p.theme.unit.glass._4};
  ${p => p.theme.typography.subTitleBold};
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: ${p => p.theme.size.mobile};
  padding: 0 ${p => p.theme.unit.glass._2};
  margin-bottom: ${p => p.theme.unit.glass._5};
  box-sizing: border-box;
  @media ${p => p.theme.device.mobile} {
    width: 100%;
  }
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: ${p => p.theme.unit.glass._3};
  @media ${p => p.theme.device.mobile} {
    flex-direction: column;
    top: 0;
  }
`;

export const StyledYAxis = styled(YAxis)`
  font-size: ${p => p.theme.unit.leaf._3};
`;

export const TooltopContainer = styled.div`
  background-color: white;
  border: 1px solid ${p => p.theme.color.gray};
  padding: ${p => p.theme.unit.leaf._5} ${p => p.theme.unit.glass._4};
`;

export const LegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: ${p => p.theme.unit.glass._2};
`;

export const StyledLegend = styled.div`
  padding: ${p => p.theme.unit.leaf._1} 0;
`;
