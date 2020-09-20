import React, { FC, ReactNode } from 'react';
import {
  StyledContainedButton,
  StyledOutLinedButton,
  StyledTextButton,
  StyledIcon,
  ErroredButton,
} from './style';
import { BUTTON_TYPE } from './type';
import { leaf, color as COLOR } from '@nature/design';
import { ButtonHTMLAttributes } from 'react';

export type IButton = {
  children: ReactNode;
  icon?: string;
  color?: COLOR;
  buttonType?: BUTTON_TYPE;
  iconSize?: leaf;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<IButton> = ({
  children,
  buttonType = BUTTON_TYPE.CONTAINED,
  color = COLOR.secondary,
  icon,
  iconSize = leaf._5,
  ...props
}) => {
  if (!icon && !children) return <ErroredButton>🤷‍</ErroredButton>;
  switch (buttonType) {
    case BUTTON_TYPE.CONTAINED:
      return (
        <StyledContainedButton icon={icon} color={color} {...props}>
          {!!icon ? <StyledIcon size={iconSize}>{icon}</StyledIcon> : null}
          {children}
        </StyledContainedButton>
      );
    case BUTTON_TYPE.OUTLINED:
      return (
        <StyledOutLinedButton icon={icon} color={color} {...props}>
          {!!icon ? <StyledIcon size={iconSize}>{icon}</StyledIcon> : null}
          {children}
        </StyledOutLinedButton>
      );
    case BUTTON_TYPE.TEXT:
      return (
        <StyledTextButton icon={icon} color={color} {...props}>
          {!!icon ? <StyledIcon size={iconSize}>{icon}</StyledIcon> : null}
          {children}
        </StyledTextButton>
      );
  }
};

export default Button;
