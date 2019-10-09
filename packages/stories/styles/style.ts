import { styled } from '@nature/element';
import { Text } from '../../client-web/components/common/Text';

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
