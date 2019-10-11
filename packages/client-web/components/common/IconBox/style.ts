import { styled } from '@nature/element';
import { IIcon } from './index';

export const StyledIcon = styled.div<IIcon>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  font-size: ${({ size }) => size};
  vertical-align: middle;
  border-radius: 50%;
`;
