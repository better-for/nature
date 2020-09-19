import styled, { css } from 'styled-components';
import { IButton } from './index';
import { lighten } from 'polished';
import Icon, { IIcon } from '../IconBox';

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
  position: relative;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    background-image: radial-gradient(circle, #fff 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform 0.5s, opacity 1s;
  }
  &:active::after {
    transform: scale(0, 0);
    opacity: 0.3;
    transition: 0s;
  }
`;

const WithIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${p => p.theme.unit.leaf._2} ${p => p.theme.unit.leaf._3};
`;

const HoverEffectColor = css<IButton>`
  ${({ color }) => lighten(0.05, color)};
`;

const HoverBoxShadow = `
  0 4px 10px 0 rgba(0, 0, 0, 0.225);
`;

export const StyledIcon = styled(Icon)<IIcon>`
  margin-right: ${p => p.theme.unit.leaf._2};
`;

export const ErroredButton = styled.button`
  ${DefaultStyle};
  pointer-events: none;
`;

export const StyledContainedButton = styled.button<IButton>`
  ${DefaultStyle};
  ${({ icon }) => !!icon && WithIcon};
  cursor: pointer;
  background-color: ${({ color }) => color};
  text-decoration: none;
  user-select: none;
  color: ${p => p.theme.color.white};
  &:hover {
    background-color: ${HoverEffectColor};
    box-shadow: ${HoverBoxShadow};
  }
`;

export const StyledOutLinedButton = styled.button<IButton>`
  ${DefaultStyle};
  ${({ icon }) => !!icon && WithIcon};
  cursor: pointer;
  box-shadow: 0 0 0 1px ${({ color }) => color};
  color: ${p => p.theme.color.gray};
  &:hover {
    box-shadow: 0 0 0.5px 1.5px ${HoverEffectColor};
  }
`;

export const StyledTextButton = styled.button<IButton>`
  ${DefaultStyle};
  ${({ icon }) => !!icon && WithIcon};
  cursor: pointer;
  color: ${({ color }) => color};
  box-shadow: none;
  border: none;
  user-select: none;
  &:hover {
    color: ${HoverEffectColor};
  }
`;
