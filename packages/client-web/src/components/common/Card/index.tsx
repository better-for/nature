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
    <StyledCard {...props} href={url} rel="noopener noreferrer" target="_blank">
      {!!image ? <StyledImage src={image} ratio={imageRatio} /> : null}
      {!!title ? (
        <StyledTitleSection>
          {!!titleIcon ? (
            <StyledIcon size={titleIconSize}>{titleIcon}</StyledIcon>
          ) : null}
          {!!title ? <StyledTitle>{title}</StyledTitle> : null}
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
