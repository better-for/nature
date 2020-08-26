import { NextComponentType, NextPageContext } from 'next';
import NextI18Next from 'next-i18next';
import KO from '../public/static/locales/ko/common.json';
import EN from '../public/static/locales/en/common.json';
// import ICU, { IcuInstance } from 'i18next-icu';
// import en from 'i18next-icu/locale-data/en';
// import ko from 'i18next-icu/locale-data/ko';
// const use: IcuInstance[] = [];
// const icu = new ICU({});
// icu.addLocaleData(ko);
// icu.addLocaleData(en);
// use.push(icu);

export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;
const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  defaultLanguage: 'en',
  defaultNS: 'common',
  fallbackLng: 'en',
  localePath:
    process.env.NODE_ENV === 'production'
      ? '{{lng}}/public/static/locales'
      : './public/static/locales',
  localeSubpaths: {
    ko: 'ko',
    en: 'en'
  },
  otherLanguages: ['ko'],
  preload: ['en', 'ko'],
  ns: ['common'],
  lng: 'en',
  keySeparator: '#||#',
  nsSeparator: '#||#',
  resources: {
    en: { common: EN },
    ko: { common: KO }
  },
  debug: false // for debugging
  // use,
});

export const {
  appWithTranslation,
  withTranslation,
  Link,
  Router,
  Trans,
  useTranslation
} = NextI18NextInstance;

export default NextI18NextInstance;
