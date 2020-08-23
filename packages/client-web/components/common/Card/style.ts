import { styled } from '@nature/element';
import { Button, IButton } from '../Button';
import Divider, { IDivider } from '../Divider';
import Icon, { IIcon } from '../IconBox';
import Image, { IImage } from '../ImageRatio';
import Text, { IText } from '../Text';

export const StyledImage = styled(Image)<IImage>`
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

export const StyledIcon = styled(Icon)<IIcon>``;

export const StyledTitle = styled(Text)<IText>`
  width: 100%;
  text-transform: uppercase;
  ${p => p.theme.typography.titleBold};
`;

export const StyledParagraph = styled(Text)<IText>`
  width: 80%;
  margin-top: ${p => p.theme.unit.glass._4};
  word-break: break-all;
  ${p => p.theme.typography.paragraphNormal};
  border: 2px solid ${p => p.theme.color.primary};
  border-top: 2px solid ${p => p.theme.color.gray};
  padding: ${p => p.theme.unit.leaf._4} ${p => p.theme.unit.leaf._3}
    ${p => p.theme.unit.leaf._1};
  border-radius: ${p => p.theme.unit.leaf._2};
  box-sizing: border-box;
  transition: all ease 0.4s;
  transform: perspective(0px) rotateX(0deg);
`;

export const StyledCard = styled.a`
  text-decoration: none;
  display: flex;
  max-width: 33%;
  min-width: 25%;
  flex: 1 1 25%; //FIXME: Temporary value
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 ${p => p.theme.unit.leaf._2} ${p => p.theme.unit.leaf._4};
  padding: ${p => p.theme.unit.leaf._4};
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
      box-shadow: 0 0 2px 0px ${p => p.theme.color.primary};
      background-color: ${p => p.theme.color.primary};
      transform: perspective(200px) rotateX(-10deg);
      border-radius: 0 0 ${p => p.theme.unit.leaf._4}
        ${p => p.theme.unit.leaf._4};
    }
    ${StyledTitleSection} {
      transform: rotateZ(-10deg);
    }
    ${StyledImage} {
      transform: rotateZ(-10deg);
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

export const StyledSubTitle = styled(Text)<IText>`
  width: 100%;
  ${p => p.theme.typography.paragraphNormal};
  margin-top: ${p => p.theme.unit.leaf._1};
`;

export const StyledDivider = styled(Divider)<IDivider>`
  width: 80%;
`;

export const StyledButton = styled(Button)<IButton>`
  margin-top: ${p => p.theme.unit.leaf._4};
  height: ${p => p.theme.unit.glass._4}; //FIXME: Temporary value
  ${p => p.theme.typography.labelNormal};
`;
