import React, { FC, ReactNode } from 'react';
import { StyledIcon } from './style';
import { theme, glass, leaf } from 'src/element';

export type IIcon = {
  size?: glass | leaf;
  children: ReactNode;
};

const Icon: FC<IIcon> = ({ children, size = theme.unit.leaf._5, ...props }) => (
  <StyledIcon size={size} {...props}>
    {children}
  </StyledIcon>
);

export default Icon;
