import React, { FC } from 'react';
import {
  StyledImageContainer,
  StyledImageRatio,
  StyledImagePosition,
  StyledImage
} from './style';
import { DEFAULT_IMAGE } from '../../../dataContent';

export type IImage = {
  src?: string;
  ratio?: number;
  [key: string]: any;
};

export const Image: FC<IImage> = ({
  src = DEFAULT_IMAGE,
  ratio = 1,
  ...props
}) => {
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
