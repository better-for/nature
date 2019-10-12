import { styled } from '@nature/element';
import { IIcon } from './index';

export const StyledIcon = styled.div<IIcon>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  font-size: ${({ size }) => size};
  line-height: 1;
  vertical-align: middle;
  text-align: right;
  border-radius: 50%;
`;
