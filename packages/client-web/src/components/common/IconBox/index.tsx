import React, { FC, ReactNode } from 'react';
import { StyledIcon } from './style';
import { theme } from '../../../../src/element';

export type IIcon = {
  [key: string]: any;
  size?: typeof theme.unit.leaf._1 | typeof theme.unit.glass._1;
  children: ReactNode;
};
const Icon: FC<IIcon> = ({ children, size = theme.unit.leaf._5, ...props }) => {
  return (
    <StyledIcon size={size} {...props}>
      {children}
    </StyledIcon>
  );
};

export default Icon;
