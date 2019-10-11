import { styled } from '@nature/element';
import { DEFAULT_IMAGE } from '../../../dataContent';
import { IImage } from './index';

export const StyledImageContainer = styled.div``;

export const StyledImageRatio = styled.div<IImage>`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: ${({ ratio }) => (!!ratio ? (1 / ratio) * 100 : 100)}%;
`;

export const StyledImagePosition = styled.div`
  position: absolute;
  top,bottom,left,right: 0;
`;

export const StyledImage = styled.img<IImage>`
  width: 100%;
  height: 100%;
  src: ${({ src }) => src};
`;
