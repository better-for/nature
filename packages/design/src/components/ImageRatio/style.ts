import styled from 'styled-components';
import { IImage } from './index';

export const StyledImageContainer = styled.div``;

export const StyledImageRatio = styled.div<{ ratio: number }>`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 0;
  padding-bottom: ${({ ratio }) => (1 / ratio) * 100}%;
`;

export const StyledImagePosition = styled.div`
  width: 60%;
  text-align: center;
`;

export const StyledImage = styled.img<IImage>`
  width: 100%;
  height: 100%;
  src: ${({ src }) => src};
`;
