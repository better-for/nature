import styled, { css } from 'styled-components';
import { Theme } from 'src/element';

export const Track = styled.div`
  width: 50px;
  height: ${p => p.theme.unit.glass._3};
  padding: 0;
  border-radius: ${p => p.theme.unit.leaf._3};
  background-color: ${p => p.theme.color.white};
  transition: all 0.2s ease;
  box-sizing: border-box;
  border: 2px solid ${p => p.theme.color.primaryVariant};
`;

export const ToggleImg = styled.img`
  width: ${p => p.theme.unit.glass._2};
  height: ${p => p.theme.unit.glass._2};
  pointer-events: none;
`;

export const Checked = styled.div`
  position: absolute;
  width: ${p => p.theme.unit.glass._2};
  height: ${p => p.theme.unit.glass._2};
  top: 0px;
  bottom: 0px;
  margin-top: auto;
  margin-bottom: auto;
  line-height: 0;
  transition: opacity 0.25s ease;
  left: 30px;
  opacity: 1;
`;

export const Thumb = styled.div`
  position: absolute;
  top: 2px;
  left: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${p => p.theme.color.black};
  box-sizing: border-box;
  box-shadow: 0 0 2px ${p => p.theme.color.black};
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  transform: translateX(0);
`;

export const Container = styled.div<{ isDarkTheme: boolean }>`
  touch-action: pan-x;
  display: inline-block;
  position: relative;
  transition: top 0.2s ease-out, background 0.2s ease-out;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  padding: 0;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
  ${p =>
    p.isDarkTheme &&
    css`
      ${Checked} {
        left: 5px;
        opacity: 1;
      }
      ${Thumb} {
        background-color: ${p => p.theme.color.white};
        box-shadow: 0 0 2px ${p => p.theme.color.white};
        transform: translateX(26px);
      }
      ${Track} {
        background-color: ${p => p.theme.color.black};
      }
    `}
`;
