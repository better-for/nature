import React, { FC, ReactNode } from 'react';
import { StyledIcon } from './style';

type IIcon = {
  [key: string]: any;
  size?: string;
  children: ReactNode;
};
export const Icon: FC<IIcon> = ({ children, size, ...props }) => {
  return (
    <StyledIcon size={size} {...props}>
      {children}
    </StyledIcon>
  );
};
