import React, { FC } from 'react';
import {
  StyledImageContainer,
  StyledImageRatio,
  StyledImagePosition,
  StyledImage
} from './style';

export type IImage = {
  src: string;
  ratio?: number;
};

const Image: FC<IImage> = ({ src, ratio = 1, ...props }) => (
  <StyledImageContainer {...props}>
    <StyledImageRatio ratio={ratio}>
      <StyledImagePosition>
        <StyledImage src={src} />
      </StyledImagePosition>
    </StyledImageRatio>
  </StyledImageContainer>
);
export default Image;
