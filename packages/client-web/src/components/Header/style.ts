import styled, { css } from 'styled-components';

const commonCSS = css<{ show: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 200;
  transition: all 200ms ${(p) => (p.show ? 'ease-in' : 'ease-out')};
  transform: ${(p) => (p.show ? 'none' : 'translate(0, -100%)')};
`;

export const Navbar = styled.nav<{
  show: boolean;
}>`
  ${commonCSS};
  @supports (backdrop-filter: blur(${(p) => p.theme.unit.leaf._1})) {
    backdrop-filter: blur(${(p) => p.theme.unit.leaf._1});
  }
`;

export const Optionbar = styled.div<{
  show: boolean;
}>`
  ${commonCSS};
  top: auto;
  left: auto;
  bottom: ${(p) => p.theme.unit.glass._3};
  right: ${(p) => p.theme.unit.leaf._5};
  transform: ${(p) => (p.show ? 'none' : 'translate(0, 150%)')};
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(p) => p.theme.unit.glass._7};
  padding: 0;
  margin: auto ${(p) => p.theme.unit.glass._2};
`;

export const Li = styled.li`
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  &:nth-child(2) > * {
    margin: 0 auto;
  }
  &:last-child > * {
    margin-left: auto;
  }
`;

export const Anchor = styled.a`
  display: flex;
  text-decoration: none;
  cursor: pointer;
`;

export const FloatContainer = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  & > * ~ * {
    margin-top: ${(p) => p.theme.unit.leaf._1};
  }
`;

export const ToggleContainer = styled.div`
  margin: 0;
  padding: 0;
  height: ${(p) => p.theme.unit.glass._3};
`;

export const BackButton = styled.div`
  display: flex;
  cursor: pointer;
  ${(p) => p.theme.typography.subTitleBold};
`;
