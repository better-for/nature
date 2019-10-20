import React, { FC, ReactNode } from 'react';
import {
  StyledContainedButton,
  StyledOutLinedButton,
  StyledTextButton,
  StyledIcon,
  ErroredButton
} from './style';
import { BUTTON_TYPE } from './type';
import { theme } from '@nature/element';
import { IIcon } from '../IconBox';

export type IButton = {
  children: ReactNode;
  [key: string]: any;
  icon?: string;
  color?: typeof theme.color.white;
  type?: BUTTON_TYPE;
  size?: IIcon['size'];
};

export const Button: FC<IButton> = ({
  type = BUTTON_TYPE.CONTAINED,
  icon,
  color = theme.color.secondary,
  children,
  size = theme.unit.leaf._5,
  ...props
}) => {
  if (!icon && !children) return <ErroredButton>🤷‍</ErroredButton>;
  switch (type) {
    case BUTTON_TYPE.CONTAINED:
      return (
        <StyledContainedButton icon={icon} color={color} {...props}>
          {!!icon && <StyledIcon size={size}>{icon}</StyledIcon>}
          {children}
        </StyledContainedButton>
      );
    case BUTTON_TYPE.OUTLINED:
      return (
        <StyledOutLinedButton icon={icon} color={color} {...props}>
          {!!icon && <StyledIcon size={size}>{icon}</StyledIcon>}
          {children}
        </StyledOutLinedButton>
      );
    case BUTTON_TYPE.TEXT:
      return (
        <StyledTextButton icon={icon} color={color} {...props}>
          {!!icon && <StyledIcon size={size}>{icon}</StyledIcon>}
          {children}
        </StyledTextButton>
      );
  }
};
