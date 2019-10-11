import { styled } from '@nature/element';
import { css } from 'styled-components';
import { IText } from './index';

export const StyledText = styled.div<IText>`
  max-width: 100%;
  display: block;
  ${({ lineClamp }) =>
    !!lineClamp &&
    css`
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-box-orient: block-axis;
      -webkit-line-clamp: ${lineClamp};
      text-overflow: ellipsis;
    `};
`;
