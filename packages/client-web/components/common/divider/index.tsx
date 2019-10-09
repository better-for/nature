import React, { FC } from 'react';
import { StyledDivider } from './style';

type IDivider = {
  [key: string]: any;
  color?: string;
};

export const Divider: FC<IDivider> = ({ color, ...props }) => {
  return <StyledDivider color={color} {...props} />;
};
