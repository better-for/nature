import React, { FC, ReactNode } from 'react';
import { StyledParagraph } from './style';

type IParagraph = {
  children: ReactNode;
  lineClamp?: number;
  [key: string]: any;
};

export const Paragraph: FC<IParagraph> = ({
  children,
  lineClamp,
  ...props
}) => (
  <StyledParagraph lineClamp={lineClamp} {...props}>
    {children}
  </StyledParagraph>
);
