import React, { FC } from 'react';
import {
  StyledImageContainer,
  StyledImageRatio,
  StyledImagePosition,
  StyledImage
} from './style';
import { DEFAULT_IMAGE_2 } from '../../../../dataContent';

export type IImage = {
  src?: string | null;
  ratio?: number;
  [key: string]: any;
};

const Image: FC<IImage> = ({ src, ratio = 1, ...props }) => {
  return (
    <StyledImageContainer {...props}>
      <StyledImageRatio ratio={ratio}>
        <StyledImagePosition>
          <StyledImage src={!src ? DEFAULT_IMAGE_2 : src} />
        </StyledImagePosition>
      </StyledImageRatio>
    </StyledImageContainer>
  );
};
export default Image;
