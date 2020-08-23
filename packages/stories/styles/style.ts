import { styled } from '../../client-web/src/components/common/Card/node_modules/@nature/element';
import { Text, Image } from '../../client-web/src/components/common';

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
