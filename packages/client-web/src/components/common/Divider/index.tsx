import React, { FC } from 'react';
import { StyledDivider } from './style';
import { color as Color } from '@nature/element';

export type IDivider = {
  color?: Color;
};

const Divider: FC<IDivider> = ({ color = Color.gray, ...props }) => (
  <StyledDivider color={color} {...props} />
);

export default Divider;
