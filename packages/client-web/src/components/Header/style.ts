import styled from 'styled-components';

export const Navbar = styled.nav<{
  isDarkTheme: boolean;
  show: boolean;
}>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  height: ${p => p.theme.unit.glass._7};
  background-color: ${p =>
    p.isDarkTheme ? p.theme.dark.bg.secondary : p.theme.light.bg.secondary};

  visibility: ${p => (p.show ? 'visible' : 'hidden')};
  transition: all 200ms ${p => (p.show ? 'ease-in' : 'ease-out')};
  transform: ${p => (p.show ? 'none' : 'translate(0, -100%)')};
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${p => p.theme.unit.glass._7};
  padding: 0;
  margin: auto ${p => p.theme.unit.glass._2};
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
  align-items: center;
  & > * ~ * {
    margin-left: ${p => p.theme.unit.leaf._2};
  }
  @media ${p => p.theme.device.mobile} {
    padding-top: ${p => p.theme.unit.leaf._8};
    flex-direction: column;
    & > * ~ * {
      margin-top: ${p => p.theme.unit.leaf._1};
      margin-left: 0;
    }
  }
`;

export const ToggleContainer = styled.div`
  margin: 0;
  padding: 0;
  height: ${p => p.theme.unit.glass._3};
`;

export const BackButton = styled.div`
  display: flex;
  color: ${p => p.theme.color.secondary};
  ${p => p.theme.typography.subTitleNormal};
  cursor: pointer;
`;
