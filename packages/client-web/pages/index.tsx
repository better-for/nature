import React from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { I18nPage, useTranslation, Link } from '../I18n';

import {
  Main,
  Point,
  Description,
  Row,
  SampleCard,
  ItemTitle,
  ItemDescription
} from 'src/components/pageStyles';
import { LINK_LIST } from 'src/constants';
import { MainTitle } from 'src/components';

const Home: I18nPage = observer(() => {
  const { t } = useTranslation();

  return (
    <>
      <Main>
        <MainTitle>
          {t('Better for')}
          <Point>{t('Nature')}</Point>
        </MainTitle>
        <Description>
          <code>{t('SAVE THE WORLD, SAVE THE YOURSELF.')}</code>
        </Description>
      </Main>
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
    </>
  );
});

export default Home;

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
