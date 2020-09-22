import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import Icon from '../IconBox';
import { color as COLOR } from '../../theme';

const withIcon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(p) => p.theme.unit.leaf._2} ${(p) => p.theme.unit.leaf._3};
`;

const defaultStyle = css<{ icon?: string }>`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  transition: all 0.3s ease-out;
  border: none;
  outline: none;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${(p) => p.theme.unit.leaf._1};
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.225);
  padding: ${(p) => p.theme.unit.leaf._2} ${(p) => p.theme.unit.leaf._4};
  position: relative;
  overflow: hidden;
  ${({ icon }) => !!icon && withIcon};
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

const hoverEffectColor = css<{ color: COLOR }>`
  ${({ color }) => lighten(0.05, color)};
`;

export const StyledIcon = styled(Icon)`
  margin-right: ${(p) => p.theme.unit.leaf._2};
`;

export const ErroredButton = styled.button`
  ${defaultStyle};
  pointer-events: none;
`;

export const StyledContainedButton = styled.button<{
  color: COLOR;
  icon?: string;
}>`
  ${defaultStyle};
  background-color: ${({ color }) => color};
  text-decoration: none;
  user-select: none;
  &:hover {
    background-color: ${hoverEffectColor};
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.225);
  }
`;

export const StyledOutLinedButton = styled.button<{
  color: COLOR;
  icon?: string;
}>`
  ${defaultStyle};
  box-shadow: 0 0 0 1px ${({ color }) => color};
  &:hover {
    box-shadow: 0 0 0.5px 1.5px ${hoverEffectColor};
  }
`;

export const StyledTextButton = styled.button<{ color: COLOR; icon?: string }>`
  ${defaultStyle};
  color: ${({ color }) => color};
  box-shadow: none;
  border: none;
  user-select: none;
  &:hover {
    color: ${hoverEffectColor};
  }
`;
