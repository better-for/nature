import React from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { I18nPage, useTranslation, Link } from '../I18n';

import { LINK_LIST } from '../dataContent';

import {
  TitleSection,
  Main,
  Title,
  Point,
  Description,
  Row,
  SampleCard,
  ItemTitle,
  ItemDescription
} from '../src/components/pageStyles';

const Home: I18nPage = observer(() => {
  const { t } = useTranslation();

  return (
    <>
      <Main>
        <TitleSection>
          <Title>
            {t('Better for')}
            <Point>{t('Nature')}</Point>
          </Title>
        </TitleSection>
        <Description>
          <code>{t('SAVE THE WORLD, SAVE THE YOURSELF.')}</code>
        </Description>
        <Row>
          {LINK_LIST.map(({ link, title, description }) => (
            <Link href={link} key={title}>
              <SampleCard>
                <ItemTitle>{t(`${title}`)} &rarr;</ItemTitle>
                <ItemDescription>{t(`${description}`)}</ItemDescription>
              </SampleCard>
            </Link>
          ))}
        </Row>
      </Main>
    </>
  );
});

export default Home;

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
