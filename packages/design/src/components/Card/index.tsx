import React, { FC, AnchorHTMLAttributes } from 'react';
import {
  StyledCard,
  StyledIcon,
  StyledButton,
  StyledImage,
  StyledTitleSection,
  StyledTitle,
  StyledSubTitle,
  StyledParagraph,
} from './style';
import { leaf, glass, color } from '@nature/design';

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
} & AnchorHTMLAttributes<HTMLAnchorElement>;

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
    <StyledCard href={url} {...props}>
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
          iconSize={buttonIconSize}
        >
          {button}
        </StyledButton>
      ) : null}
    </StyledCard>
  );
};

export default Card;
