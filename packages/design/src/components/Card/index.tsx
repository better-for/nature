import React, { FC, AnchorHTMLAttributes } from 'react';
import {
  StyledCard,
  StyledButton,
  StyledImage,
  StyledTitleSection,
  StyledTitle,
  StyledSubTitle,
  StyledParagraph,
} from './style';
import { leaf, glass, color, Icon } from '@nature/design';
import { OffScreen } from '../style';

export interface ICard extends AnchorHTMLAttributes<HTMLAnchorElement> {
  url?: string;
  image?: string;
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
  buttonIconSize?: leaf;
}

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
          {!!titleIcon ? <Icon size={titleIconSize}>{titleIcon}</Icon> : null}
          {!!title ? (
            <>
              <StyledTitle aria-hidden="true">{title}</StyledTitle>
              <OffScreen>{title}</OffScreen>
            </>
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
          iconSize={buttonIconSize}
        >
          {button}
        </StyledButton>
      ) : null}
    </StyledCard>
  );
};

export default Card;
