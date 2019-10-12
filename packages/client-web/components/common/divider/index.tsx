import React, { FC } from 'react';
import { StyledDivider } from './style';
import { theme } from '@nature/element';

export type IDivider = {
  [key: string]: any;
  color?: typeof theme.color.white;
};

export const Divider: FC<IDivider> = ({
  color = theme.color.gray,
  ...props
}) => {
  return <StyledDivider color={color} {...props} />;
};
