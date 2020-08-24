import NextI18Next from 'next-i18next';
import { NextComponentType, NextPageContext } from 'next';

export type I18nPage<P = {}> = NextComponentType<
  NextPageContext,
  { namespacesRequired: string[] },
  P & { namespacesRequired: string[] }
>;

export const includeDefaultNamespaces = (namespaces: string[]) =>
  ['common'].concat(namespaces);

const NextI18NextInstance = new NextI18Next({
  browserLanguageDetection: false,
  defaultLanguage: 'en',
  defaultNS: 'common',
  fallbackLng: 'en',
  keySeparator: '###',
  localePath: './public/static/locales',
  //   localeSubpaths: {
  //     ko: 'ko',
  //     en: 'en'
  //   },
  otherLanguages: ['ko']
});

export const {
  appWithTranslation,
  useTranslation,
  Link,
  Router
} = NextI18NextInstance;

export default NextI18NextInstance;
