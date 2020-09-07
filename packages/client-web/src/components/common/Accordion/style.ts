import styled, { css } from 'styled-components';
import { Button, Text } from 'src/components/common';

export const ToggleButton = styled(Button)<{ isExpanded: Boolean }>`
  font-weight: bold;
  background-color: transparent;
  padding: 0;
  ${p =>
    p.isExpanded
      ? css`
          transform: rotateX(-180deg);
        `
      : css`
          transform: rotateX(0);
        `};
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: ${p => p.theme.unit.leaf._3} ${p => p.theme.unit.leaf._2};
  border-bottom: 2px solid ${p => p.theme.color.secondaryVariant};
  box-sizing: border-box;
  ${p => p.theme.typography.subTitleBold};
  transition-duration: 0.25s;
  &:hover {
    border-color: ${p => p.theme.color.primaryVariant};
  }
`;

export const Body = styled(Text)<{ isExpanded: boolean; isDarkTheme: boolean }>`
  width: 90%;
  max-height: ${p => (p.isExpanded ? '800px' : '100px')};
  transition: background 0.3s ease, max-height 1s ease-in-out;
  ${p => p.theme.typography.paragraphNormal};
  line-height: 1.6;
  background: none;
  border: 0;
  box-sizing: border-box;
  word-break: break-all;
  padding: ${p => p.theme.unit.glass._3} ${p => p.theme.unit.leaf._2}
    ${p => p.theme.unit.leaf._3};
  @media ${p => p.theme.device.mobile} {
    width: 95%;
    word-break: break-all;
    max-height: ${p => (p.isExpanded ? '1700px' : '130px')};
    padding: ${p => p.theme.unit.glass._2} ${p => p.theme.unit.leaf._2}
      ${p => p.theme.unit.leaf._5};
  }
  overflow-y: hidden;
  position: relative;
  &::after {
    ${p =>
      !p.isExpanded &&
      css`
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 30px;
        content: '';
        background: ${p.isDarkTheme
          ? `linear-gradient(
                to bottom,
                rgba(34, 34, 34, 0.7),
                rgba(34, 34, 34, 1)
              )`
          : `linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0.7),
                rgba(255, 255, 255, 1)
              )`};
      `};
  }
`;

export const Section = styled.section``;
