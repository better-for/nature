import React, { FC, ReactNode } from 'react';
import {
  StyledContainedButton,
  StyledOutLinedButton,
  StyledTextButton,
  StyledIcon,
  ErroredButton
} from './style';
import { BUTTON_TYPE } from './type';
import { leaf, color as Color } from '@nature/element';
import { IIcon } from '../IconBox';
import { ButtonHTMLAttributes } from 'react';

export type IButton = {
  children: ReactNode;
  icon?: string;
  color?: Color;
  buttonType?: BUTTON_TYPE;
  size?: IIcon['size'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IButton> = ({
  buttonType = BUTTON_TYPE.CONTAINED,
  icon,
  color = Color.secondary,
  children,
  size = leaf._5,
  ...props
}) => {
  if (!icon && !children) return <ErroredButton>🤷‍</ErroredButton>;
  switch (buttonType) {
    case BUTTON_TYPE.CONTAINED:
      return (
        <StyledContainedButton icon={icon} color={color} {...props}>
          {!!icon ? <StyledIcon size={size}>{icon}</StyledIcon> : null}
          {children}
        </StyledContainedButton>
      );
    case BUTTON_TYPE.OUTLINED:
      return (
        <StyledOutLinedButton icon={icon} color={color} {...props}>
          {!!icon ? <StyledIcon size={size}>{icon}</StyledIcon> : null}
          {children}
        </StyledOutLinedButton>
      );
    case BUTTON_TYPE.TEXT:
      return (
        <StyledTextButton icon={icon} color={color} {...props}>
          {!!icon ? <StyledIcon size={size}>{icon}</StyledIcon> : null}
          {children}
        </StyledTextButton>
      );
  }
};

export default Button;
