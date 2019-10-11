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
  image?: string;
  imageRatio?: number;
  titleIcon?: string;
  titleIconSize?: number;
  title?: string;
  titleLineClamp?: number;
  subTitle?: string;
  subTitleLineClamp?: number;
  paragraph?: string;
  paragraphLineClamp?: number;
  button?: string;
  buttonColor?: string;
  buttonIcon?: string;
  [key: string]: any;
};

export const Card: FC<ICard> = ({
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
  ...props
}) => {
  return (
    <StyledCard {...props}>
      {!!image && <StyledImage src={image} ratio={imageRatio} />}
      <StyledTitleSection>
        {!!titleIcon && (
          <StyledIcon size={titleIconSize}>{titleIcon}</StyledIcon>
        )}
        {!!title && (
          <StyledTitle lineClamp={titleLineClamp}>{title}</StyledTitle>
        )}
      </StyledTitleSection>
      {!!subTitle && (
        <StyledSubTitle lineClamp={subTitleLineClamp}>
          {subTitle}
        </StyledSubTitle>
      )}
      {!!paragraph && (
        <>
          <StyledDivider />
          <StyledParagraph lineClamp={paragraphLineClamp}>
            {paragraph}
          </StyledParagraph>
        </>
      )}
      {!!button && (
        <StyledButton color={buttonColor} icon={buttonIcon}>
          {button}
        </StyledButton>
      )}
    </StyledCard>
  );
};
