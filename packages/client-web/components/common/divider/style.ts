import { styled } from '@nature/element';
import { css } from 'styled-components';

export const StyledDivider = styled.div<{ color?: string }>`
  display: block;
  max-width: 100%;
  min-height: 1px;
  background-color: ${p => (!!p.color ? p.color : p.theme.color.gray)};
  ${p =>
    !p.color &&
    css`
      opacity: 0.4; //TODO: Should we define value?
    `}
  border-radius: 3px;
  margin: ${p => p.theme.unit.leaf._2} 0;
`;
