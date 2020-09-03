import React, { FC } from 'react';
import { useTranslation } from '../../../I18n';
import { I18nButton as I18nBtn } from './style';

type I18nButton = {
  isDarkTheme: boolean;
};

const I18nButton: FC<I18nButton> = ({ isDarkTheme }) => {
  const {
    i18n: { language, changeLanguage }
  } = useTranslation();
  const toggleLang = language === 'en' ? 'ko' : 'en';
  const translatedLang = language === 'en' ? 'English' : '한국어';
  return (
    <I18nBtn
      onClick={() => changeLanguage(toggleLang)}
      isDarkTheme={isDarkTheme}
    >
      {translatedLang}
    </I18nBtn>
  );
};

export default I18nButton;
