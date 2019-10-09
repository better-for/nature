import { styled } from '@nature/element';
import { DEFAULT_IMAGE } from '../../../dataContent';

export const StyledImageContainer = styled.div``;

export const StyledImageRatio = styled.div<{ ratio?: number }>`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${p => (!!p.ratio ? (1 / p.ratio) * 100 : 100)}%;
`;

export const StyledImagePosition = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledImage = styled.img<{ src?: string }>`
  width: 100%;
  height: 100%;
  src: ${p => (!!p.src ? p.src : DEFAULT_IMAGE)};
`;
