import React from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { useTranslation, I18nPage, Router } from '../I18n';

import OGHeader from '../src/components/OG';
import { ogHeader } from '../dataContent';
import Toggle from '../src/components/Toggle';
import I18nButton from '../src/components/I18nButton';
import { Card } from '../src/components/common';
import { useDarkMode } from '../src/utils/useDarkMode';
import { ECO_FRIENDLY_BLOGS } from '../dataContent';

import {
  TitleSection,
  Main,
  Title,
  Point,
  CardContainer,
  BackButton,
  GlobalStyle,
  ToggleContainer,
  FloatContainer
} from '../src/components/pageStyles';

const Blog: I18nPage = observer(() => {
  const { title, description, image } = ogHeader;
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const { t } = useTranslation();
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
        <I18nButton isDarkTheme={isDarkTheme} />
      </FloatContainer>
    </>
  );
});

export default Blog;

Blog.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
