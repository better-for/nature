import React, { FC } from 'react';
import {
  StyledImageContainer,
  StyledImageRatio,
  StyledImagePosition,
  StyledImage
} from './style';

type IImage = {
  src?: string;
  ratio?: number;
  [key: string]: any;
};

export const Image: FC<IImage> = ({ src, ratio, ...props }) => {
  return (
    <StyledImageContainer {...props}>
      <StyledImageRatio ratio={ratio}>
        <StyledImagePosition>
          <StyledImage src={src} />
        </StyledImagePosition>
      </StyledImageRatio>
    </StyledImageContainer>
  );
};
