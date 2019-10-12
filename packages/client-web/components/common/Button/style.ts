import { styled } from '@nature/element';
import { css } from 'styled-components';
import { IButton } from './index';
import { Icon } from '../IconBox';
import { lighten } from 'polished';

const DefaultStyle = css`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  transition: all 0.3s ease-out;
  border: none;
  outline: none;
  box-sizing: border-box;
  text-transform: uppercase;
  border-radius: ${p => p.theme.unit.leaf._1};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
  padding: ${p => p.theme.unit.leaf._2} ${p => p.theme.unit.leaf._4};
`;

const WithIcon = css`
  display: flex;
  justify-content: center;
  padding: ${p => p.theme.unit.leaf._2} ${p => p.theme.unit.leaf._3};
`;

const HoverEffectColor = css<IButton>`
  ${({ color }) => lighten(0.05, color)};
`;

const ActiveEffectColor = css<IButton>`
  ${({ color }) => lighten(0.1, color)};
`;

const HoverBoxShadow = `
  0 4px 10px 0 rgba(0, 0, 0, 0.225);
`;

export const StyledIcon = styled(Icon)<typeof Icon>`
  margin-right: ${p => p.theme.unit.leaf._2};
`;

export const ErroredButton = styled.button`
  ${DefaultStyle};
`;

export const StyledContainedButton = styled.button<IButton>`
  ${DefaultStyle};
  ${({ icon }) => !!icon && WithIcon};
  background-color: ${({ color }) => color};
  text-decoration: none;
  user-select: none;
  color: ${p => p.theme.color.white};
  &:hover {
    background-color: ${HoverEffectColor};
    box-shadow: ${HoverBoxShadow};
  }
  &:active {
    font-weight: 500;
    background-color: ${ActiveEffectColor};
  }
`;

export const StyledOutLinedButton = styled.button<IButton>`
  ${DefaultStyle};
  ${({ icon }) => !!icon && WithIcon};
  box-shadow: 0 0 0 1px ${({ color }) => color};
  color: ${p => p.theme.color.gray};
  &:hover {
    box-shadow: 0 0 0.5px 1.5px ${HoverEffectColor};
  }
  &:active {
    font-weight: 500;
    box-shadow: 0 0 0.5px 1.5px ${ActiveEffectColor};
  }
`;

export const StyledTextButton = styled.button<IButton>`
  ${DefaultStyle};
  ${({ icon }) => !!icon && WithIcon};
  color: ${({ color }) => color};
  box-shadow: none;
  border: none;
  user-select: none;
  &:hover {
    color: ${HoverEffectColor};
  }
  &:active {
    font-weight: 500;
    color: ${ActiveEffectColor};
  }
`;
