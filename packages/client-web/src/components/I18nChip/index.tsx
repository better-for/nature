import React, { FC } from 'react';
import { useTranslation } from 'I18n';
import { StyledChip } from './style';
import { useDarkModeTheme } from 'src/utils';

const I18nChip: FC = () => {
  const {
    i18n: { language, changeLanguage }
  } = useTranslation();
  const { isDarkTheme } = useDarkModeTheme();
  const toggleLang = language === 'en' ? 'ko' : 'en';
  const translatedLang = language === 'en' ? 'English' : '한국어';

  return (
    <StyledChip
      onClick={() => changeLanguage(toggleLang)}
      isDarkTheme={isDarkTheme}
    >
      {translatedLang}
    </StyledChip>
  );
};

export default I18nChip;
