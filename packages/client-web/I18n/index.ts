import { NextComponentType, NextPageContext } from 'next';
import NextI18Next from 'next-i18next';
import KO from '../public/static/locales/ko/common.json';
import EN from '../public/static/locales/en/common.json';

export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: true,
  defaultLanguage: 'en',
  defaultNS: 'common',
  fallbackLng: 'en',
  whitelist: ['en', 'ko'],
  localePath:
    typeof window === 'undefined' ? 'public/static/locales' : 'static/locales',
  localeSubpaths: {
    ko: 'ko',
    en: 'en',
  },
  otherLanguages: ['ko'],
  preload: ['en', 'ko'],
  ns: ['common'],
  lng: 'en',
  keySeparator: '#||#',
  nsSeparator: '#||#',
  resources: {
    en: { common: EN },
    ko: { common: KO },
  },
  debug: false, // Turn on this for debugging
  react: {
    useSuspense: false,
  },
});

export const {
  appWithTranslation,
  withTranslation,
  Link,
  Router,
  Trans,
  useTranslation,
} = NextI18NextInstance;

export default NextI18NextInstance;
