import { styled } from '@nature/element';
import { Text } from '../../client-web/components/common/Text';
import { Image } from '../../client-web/components/common/ImageRatio';

export const StyledTitle = styled(Text)`
  ${p => p.theme.typography.titleNormal};
`;

export const StyledSubTitle = styled(Text)`
  ${p => p.theme.typography.subTitleNormal};
`;

export const StyledParagraph = styled(Text)`
  ${p => p.theme.typography.paragraphNormal};
`;

export const StyledHero = styled(Text)`
  ${p => p.theme.typography.heroNormal};
`;

export const StyledSubHero = styled(Text)`
  ${p => p.theme.typography.subHeroNormal};
`;

export const StyledLabel = styled(Text)`
  ${p => p.theme.typography.labelNormal};
`;

export const StyledImage = styled(Image)`
  width: ${p => p.theme.unit.glass._50};
`;
