import React from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { useTranslation, I18nPage } from '../I18n';

import { Card } from 'src/components/common';

import {
  TitleSection,
  Main,
  Title,
  Point,
  CardContainer
} from 'src/components/pageStyles';
import { ECO_FRIENDLY_BLOGS } from 'src/constants';

const Blog: I18nPage = observer(() => {
  const { t } = useTranslation();
  return (
    <>
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
    </>
  );
});

export default Blog;

Blog.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
