import React, { FC, ImgHTMLAttributes } from 'react';
import {
  StyledImageContainer,
  StyledImageRatio,
  StyledImagePosition,
  StyledImage,
} from './style';

export type IImage = {
  src: string;
  ratio?: number;
} & ImgHTMLAttributes<HTMLImageElement>;

const Image: FC<IImage> = ({ src, ratio = 1, ...props }) => (
  <StyledImageContainer>
    <StyledImageRatio ratio={ratio}>
      <StyledImagePosition>
        <StyledImage src={src} {...props} />
      </StyledImagePosition>
    </StyledImageRatio>
  </StyledImageContainer>
);
export default Image;
