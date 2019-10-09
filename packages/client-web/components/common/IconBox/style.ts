import { styled } from '@nature/element';

export const StyledIcon = styled.div<{ size: string }>`
  width: ${p => (!!p.size ? p.size : p.theme.unit.glass._4)};
  height: ${p => (!!p.size ? p.size : p.theme.unit.glass._4)};
  font-size: ${p => (!!p.size ? p.size : p.theme.unit.glass._4)};
  line-height: 1;
  border-radius: 50%;
`;
