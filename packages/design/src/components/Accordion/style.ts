import styled, { css, keyframes } from 'styled-components';
import { Button, Text } from '../index';

export const ToggleButton = styled(Button)<{ isExpanded: Boolean }>`
  font-weight: bold;
  background-color: transparent;
  padding: 0;
  ${(p) =>
    p.isExpanded
      ? css`
          transform: rotateX(-180deg);
        `
      : css`
          transform: rotateX(0);
        `};
`;

const bound = keyframes`
  50% {
    transform:translateY(50%);
    opacity:0;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${(p) => p.theme.unit.leaf._3} ${(p) => p.theme.unit.leaf._2};
  box-sizing: border-box;
  ${(p) => p.theme.typography.subTitleBold};
  position: relative;
  &::after {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    transition-duration: 0.25s;
    border-bottom: 2px solid ${(p) => p.theme.color.secondaryVariant};
  }
  &:hover::after {
    animation: ${bound} 0.8s ease-in-out both;
    border-color: ${(p) => p.theme.color.primaryVariant};
  }
`;

export const Body = styled(Text)<{ isExpanded: boolean }>`
  width: 90%;
  max-height: ${(p) => (p.isExpanded ? '800px' : '100px')};
  transition: background 0.3s ease, max-height 1s ease-in-out;
  ${(p) => p.theme.typography.paragraphNormal};
  line-height: 1.6;
  background: none;
  border: 0;
  box-sizing: border-box;
  word-break: break-all;
  padding: ${(p) => p.theme.unit.glass._3} ${(p) => p.theme.unit.leaf._2}
    ${(p) => p.theme.unit.leaf._3};
  @media ${(p) => p.theme.device.mobile} {
    width: 95%;
    word-break: break-all;
    max-height: ${(p) => (p.isExpanded ? '1700px' : '130px')};
    padding: ${(p) => p.theme.unit.glass._2} ${(p) => p.theme.unit.leaf._2}
      ${(p) => p.theme.unit.leaf._5};
  }
  overflow-y: hidden;
  position: relative;
  ${(p) =>
    !p.isExpanded &&
    css`
      -webkit-mask-image: -webkit-gradient(
        linear,
        left 50%,
        left bottom,
        from(rgba(0, 0, 0, 1)),
        to(rgba(0, 0, 0, 0))
      );
    `};
`;

export const Section = styled.section``;
