import { styled } from '@nature/element';
import { Button, IButton } from '../Button';
import { Divider, IDivider } from '../Divider';
import { Icon, IIcon } from '../IconBox';
import { Image, IImage } from '../ImageRatio';
import { Text, IText } from '../Text';

export const StyledCard = styled.div`
  display: flex;
  flex: 1 0 30%;//FIXME: Temporary value
  flex-direction: column;
  /* width: ${p => p.theme.unit.glass._50}; */
  margin: 0 ${p => p.theme.unit.leaf._4} ${p => p.theme.unit.leaf._4};
  padding: ${p => p.theme.unit.leaf._4};
  box-shadow: 0 0 0 1px ${p => p.theme.color.secondary};
  box-sizing: border-box;
  @media ${p => p.theme.device.mobile} {
    flex: 1 0 ${p => p.theme.unit.glass._45}; //FIXME: Temporary value
    margin: 0 auto ${p => p.theme.unit.leaf._4};
  }
`;

export const StyledImage = styled(Image)<IImage>``;

export const StyledIcon = styled(Icon)<IIcon>``;

export const StyledTitleSection = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTitle = styled(Text)<IText>`
  width: 100%;
  ${p => p.theme.typography.subTitleNormal};
`;

export const StyledSubTitle = styled(Text)<IText>`
  width: 100%;
  ${p => p.theme.typography.paragraphNormal};
  margin-top: ${p => p.theme.unit.leaf._1};
`;

export const StyledDivider = styled(Divider)<IDivider>``;

export const StyledParagraph = styled(Text)<IText>`
  width: 100%;
  ${p => p.theme.typography.paragraphNormal};
  color: ${p => p.theme.color.gray};
  word-break: break-all;
`;

export const StyledButton = styled(Button)<IButton>`
  margin-top: ${p => p.theme.unit.leaf._4};
`;
