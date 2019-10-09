import { styled } from '@nature/element';
import { css } from 'styled-components';

export const StyledText = styled.p<{
  lineClamp: number | undefined;
}>`
  max-width: 100%;
  display: block;
  ${p =>
    !!p.lineClamp &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-box-orient: block-axis;
      -webkit-line-clamp: ${p.lineClamp};
      text-overflow: ellipsis;
    `};
`;
