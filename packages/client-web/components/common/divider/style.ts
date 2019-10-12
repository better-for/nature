import { styled } from '@nature/element';
import { IDivider } from './index';

export const StyledDivider = styled.div<IDivider>`
  display: block;
  max-width: 100%;
  min-height: 1px;
  background-color: ${({ color }) => color};
  opacity: 0.4; //TODO: Should we define value?
  border-radius: ${p => p.theme.unit.leaf._1};
  margin: ${p => p.theme.unit.leaf._2} 0;
`;
