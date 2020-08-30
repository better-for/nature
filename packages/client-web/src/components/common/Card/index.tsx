import React, { FC } from 'react';
import {
  StyledCard,
  StyledIcon,
  StyledButton,
  StyledImage,
  StyledTitleSection,
  StyledTitle,
  StyledSubTitle,
  StyledParagraph
} from './style';
import { leaf, glass, color } from 'src/element';

export type ICard = {
  url: string | null;
  image?: string | null;
  imageRatio?: number;
  titleIcon?: string;
  titleIconSize?: glass | leaf;
  title?: string;
  titleLineClamp?: number;
  subTitle?: string;
  subTitleLineClamp?: number;
  paragraph?: string;
  paragraphLineClamp?: number;
  button?: string;
  buttonColor?: color;
  buttonIcon?: string;
  buttonIconSize?: glass | leaf;
};

const Card: FC<ICard> = ({
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
      {!!image ? <StyledImage src={image} ratio={imageRatio} /> : null}
      {!!title ? (
        <StyledTitleSection>
          {!!titleIcon ? (
            <StyledIcon size={titleIconSize}>{titleIcon}</StyledIcon>
          ) : null}
          {!!title ? (
            <StyledTitle lineClamp={titleLineClamp}>{title}</StyledTitle>
          ) : null}
        </StyledTitleSection>
      ) : null}
      {!!subTitle ? (
        <StyledSubTitle lineClamp={subTitleLineClamp}>
          {subTitle}
        </StyledSubTitle>
      ) : null}
      {!!paragraph ? (
        <StyledParagraph lineClamp={paragraphLineClamp}>
          {paragraph}
        </StyledParagraph>
      ) : null}
      {!!button ? (
        <StyledButton
          color={buttonColor}
          icon={buttonIcon}
          size={buttonIconSize}
        >
          {button}
        </StyledButton>
      ) : null}
    </StyledCard>
  );
};

export default Card;
