import React, { FC } from 'react';
import { StyledDivider } from './style';
import { theme, color } from 'src/element';

export type IDivider = {
  color?: color;
};

const Divider: FC<IDivider> = ({ color = theme.color.gray, ...props }) => (
  <StyledDivider color={color} {...props} />
);

export default Divider;
