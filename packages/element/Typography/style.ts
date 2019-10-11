import { css } from 'styled-components';
import { device } from '../Viewport';

const HeroBold = css`
  font-size: 48px;
  font-weight: bold;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const HeroNormal = css`
  font-size: 48px;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 40px;
  }
`;

const SubHeroBold = css`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 32px;
  }
`;

const SubHeroNormal = css`
  font-size: 36px;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 32px;
  }
`;

const TitleBold = css`
  font-size: 22px;
  font-weight: bold;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const TitleNormal = css`
  font-size: 22px;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 20px;
  }
`;

const SubTitleBold = css`
  font-size: 18px;
  font-weight: bold;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const SubTitleNormal = css`
  font-size: 18px;
  line-height: 1.1;
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const ParagraphBold = css`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const ParagraphNormal = css`
  font-size: 16px;
  line-height: 1.3;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const LabelBold = css`
  font-size: 14px;
  font-weight: bold;
  line-height: 1.3;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const LabelNormal = css`
  font-size: 14px;
  line-height: 1.3;
  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export {
  HeroBold,
  HeroNormal,
  SubHeroBold,
  SubHeroNormal,
  TitleBold,
  TitleNormal,
  SubTitleBold,
  SubTitleNormal,
  ParagraphBold,
  ParagraphNormal,
  LabelBold,
  LabelNormal
};
