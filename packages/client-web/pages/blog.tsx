import React, { FC } from 'react';
// import Router from 'next/router';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import {
  useTranslation,
  I18nPage,
  includeDefaultNamespaces,
  Router
} from '../I18n';

import {
  TitleSection,
  Main,
  Title,
  Point,
  CardContainer,
  BackButton,
  GlobalStyle,
  ToggleContainer,
  FloatContainer,
  I18nButton
} from '../src/components/pageStyles';
import { ogHeader } from '../dataContent';
import OGHeader from '../src/components/OG';
import { Card, Toggle } from '../src/components/common';
import { ECO_FRIENDLY_BLOGS } from '../dataContent';
import { useDarkMode } from '../src/utils/useDarkMode';
import { LANGUAGE } from '../src/constants';

const Blog: I18nPage = observer(() => {
  const { title, description, image } = ogHeader;
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const {
    t,
    i18n: { language, changeLanguage }
  } = useTranslation();
  const { label } = LANGUAGE[language];
  const toggleLang = language === 'en' ? 'ko' : 'en';

  return (
    <>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <OGHeader title={title} description={description} image={image} />
      <BackButton onClick={() => Router.back()}>&larr; Back</BackButton>
      <Main>
        <TitleSection>
          <Title>
            {t('Eco-friendly')} <Point>{t('Blogs')}</Point>
          </Title>
        </TitleSection>
      </Main>
      <CardContainer>
        {ECO_FRIENDLY_BLOGS.map(({ title, image, url, id, description }) => {
          return (
            <Card
              url={url}
              image={image}
              imageRatio={4 / 1}
              titleIcon={!image && '🌱'}
              titleIconSize={'30px'}
              title={!image && title}
              titleLineClamp={1}
              paragraph={description}
              paragraphLineClamp={3}
              key={id}
            />
          );
        })}
      </CardContainer>
      <FloatContainer>
        <ToggleContainer>
          <Toggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
        </ToggleContainer>
        <I18nButton onClick={() => changeLanguage(toggleLang)}>
          {label}
        </I18nButton>
      </FloatContainer>
    </>
  );
});

export default Blog;

Blog.getInitialProps = async () => ({
  namespacesRequired: includeDefaultNamespaces(['Blog'])
});
