import React, { FC } from 'react';
import {
  StyledCard,
  StyledIcon,
  StyledButton,
  StyledDivider,
  StyledImage,
  StyledTitleSection,
  StyledTitle,
  StyledSubTitle,
  StyledParagraph
} from './style';

export type ICard = {
  url: string | null;
  image?: string | boolean;
  imageRatio?: number;
  titleIcon?: string;
  titleIconSize?: string;
  title?: string;
  titleLineClamp?: number;
  subTitle?: string;
  subTitleLineClamp?: number;
  paragraph?: string;
  paragraphLineClamp?: number;
  button?: string;
  buttonColor?: string;
  buttonIcon?: string;
  buttonIconSize?: string;
  [key: string]: any;
};

export const Card: FC<ICard> = ({
  url,
  image,
  imageRatio,
  titleIcon,
  titleIconSize,
  title,
  titleLineClamp,
  subTitle,
  subTitleLineClamp,
  paragraph,
  paragraphLineClamp,
  button,
  buttonColor,
  buttonIcon,
  buttonIconSize,
  ...props
}) => {
  return (
    <StyledCard {...props} href={url}>
      {!!image && <StyledImage src={image} ratio={imageRatio} />}
      {!!title && (
        <StyledTitleSection>
          {!!titleIcon && (
            <StyledIcon size={titleIconSize}>{titleIcon}</StyledIcon>
          )}
          {!!title && (
            <StyledTitle lineClamp={titleLineClamp}>{title}</StyledTitle>
          )}
        </StyledTitleSection>
      )}
      {!!subTitle && (
        <StyledSubTitle lineClamp={subTitleLineClamp}>
          {subTitle}
        </StyledSubTitle>
      )}
      {!!paragraph && (
        <StyledParagraph lineClamp={paragraphLineClamp}>
          {paragraph}
        </StyledParagraph>
      )}
      {!!button && (
        <StyledButton
          color={buttonColor}
          icon={buttonIcon}
          size={buttonIconSize}
        >
          {button}
        </StyledButton>
      )}
    </StyledCard>
  );
};
