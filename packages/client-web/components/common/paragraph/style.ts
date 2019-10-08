import { styled } from '@nature/element';
import { css } from 'styled-components';

export const StyledParagraph = styled.p<{
  lineClamp: number;
}>`
  max-width: 100%;
  display: block;
  ${p => p.theme.typography.labelNormal};
  ${p =>
    p.lineClamp &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-box-orient: block-axis;
      -webkit-line-clamp: ${p.lineClamp};
      text-overflow: ellipsis;
    `};
`;
