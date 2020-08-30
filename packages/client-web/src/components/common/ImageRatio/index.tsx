import React, { FC } from 'react';
import {
  StyledImageContainer,
  StyledImageRatio,
  StyledImagePosition,
  StyledImage
} from './style';
import { DEFAULT_IMAGE_2 } from 'src/constants';

export type IImage = {
  src?: string | null;
  ratio?: number;
};

const Image: FC<IImage> = ({ src, ratio = 1, ...props }) => (
  <StyledImageContainer {...props}>
    <StyledImageRatio ratio={ratio}>
      <StyledImagePosition>
        <StyledImage src={!src ? DEFAULT_IMAGE_2 : src} />
      </StyledImagePosition>
    </StyledImageRatio>
  </StyledImageContainer>
);
export default Image;
