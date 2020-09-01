import styled from 'styled-components';
import Button from '../Button';
import Divider from '../Divider';
import Icon from '../IconBox';
import Image from '../ImageRatio';
import Text from '../Text';
import { hoverEffect } from 'src/components/pageStyles';

export const StyledImage = styled(Image)`
  padding: 0 ${p => p.theme.unit.glass._8};
  transition: all ease 0.5s;
`;

export const StyledTitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  transition: all ease 0.5s;
  margin-top: ${p => p.theme.unit.glass._2};
`;

export const StyledIcon = styled(Icon)``;

export const StyledTitle = styled(Text)`
  width: 100%;
  text-transform: uppercase;
  ${p => p.theme.typography.subTitleBold};
`;

export const StyledParagraph = styled(Text)`
  width: 80%;
  margin-top: ${p => p.theme.unit.glass._4};
  padding: ${p => p.theme.unit.leaf._1} ${p => p.theme.unit.leaf._3};
  ${p => p.theme.typography.paragraphNormal};
  word-break: break-all;
  line-height: 1.6;
  cursor: pointer;
  background: none;
  border: 0;
  box-sizing: border-box;
  color: ${p => p.theme.color.gray};
  position: relative;
  @media ${p => p.theme.device.mobile} {
    box-shadow: inset 0 0 0 2px ${p => p.theme.color.primaryVariant};
  }
`;

export const StyledCard = styled.a`
  text-decoration: none;
  color: inherit;
  display: flex;
  max-width: 33%;
  min-width: 25%;
  flex: 1 1 25%; //FIXME: Temporary value
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${p => p.theme.unit.leaf._2} ${p => p.theme.unit.leaf._4};
  padding: ${p => p.theme.unit.leaf._4} 0;
  box-sizing: border-box;

  @media ${p => p.theme.device.tablet} {
    min-width: 40%;
    flex: 1 1 40%;
  }
  @media ${p => p.theme.device.mobile} {
    min-width: 100%;
    flex: 1 0 100%;
    margin: 0 auto ${p => p.theme.unit.glass._8};
  }

  &:hover {
    ${StyledParagraph} {
      ${hoverEffect};
      &:hover::before {
        border-top-color: ${p => p.theme.color.gray};
      }
    }
    ${StyledTitleSection} {
      transform: rotateZ(-5deg);
    }
    ${StyledImage} {
      transform: rotateZ(-5deg);
    }
  }
  &:visited,
  &:focus,
  &:hover,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledSubTitle = styled(Text)`
  width: 100%;
  ${p => p.theme.typography.paragraphNormal};
  margin-top: ${p => p.theme.unit.leaf._1};
`;

export const StyledDivider = styled(Divider)`
  width: 80%;
`;

export const StyledButton = styled(Button)`
  margin-top: ${p => p.theme.unit.leaf._4};
  height: ${p => p.theme.unit.glass._4}; //FIXME: Temporary value
  ${p => p.theme.typography.labelNormal};
`;
