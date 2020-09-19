import React, { FC, ReactNode } from 'react';
import { StyledIcon } from './style';
import { glass, leaf } from '@nature/design';

export type IIcon = {
  size?: glass | leaf;
  children: ReactNode;
};

const Icon: FC<IIcon> = ({ children, size = leaf._5, ...props }) => (
  <StyledIcon size={size} {...props}>
    {children}
  </StyledIcon>
);

export default Icon;
