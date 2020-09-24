import React, { FC } from 'react';
import { StyledDivider } from './style';
import { color as COLOR } from '@nature/design';

export type IDivider = {
  color?: COLOR;
};

const Divider: FC<IDivider> = ({ color = COLOR.gray, ...props }) => (
  <StyledDivider color={color} {...props} />
);

export default Divider;
