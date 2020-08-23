import React, { FC, ReactNode } from 'react';
import { StyledText } from './style';

export type IText = {
  children: ReactNode;
  lineClamp?: number;
  [key: string]: any;
};

export const Text: FC<IText> = ({ children, lineClamp, ...props }) => (
  <StyledText lineClamp={lineClamp} {...props}>
    {children}
  </StyledText>
);
