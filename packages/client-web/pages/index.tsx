import React from 'react';
import { observer } from 'mobx-react';
import { I18nPage, useTranslation, Link } from 'I18n';

import { LINK_LIST } from 'src/constants';
import { MainTitle } from 'src/components';

import {
  Main,
  Title,
  Point,
  Description,
  Row,
  SampleCard,
  ItemTitle,
  ItemDescription,
} from 'src/style';

const Home: I18nPage = observer(() => {
  const { t } = useTranslation();

  return (
    <>
      <Main>
        <MainTitle>
          <Title>{t('Better for')}</Title>
          <Point>{t('Nature')}</Point>
        </MainTitle>
        <Description>
          <code>{t('SAVE THE WORLD, SAVE THE YOURSELF.')}</code>
        </Description>
      </Main>
      <Row>
        {LINK_LIST.map(({ link, title, description }) => (
          <Link href={link} key={title}>
            <SampleCard as="button">
              <ItemTitle>{t(title)}</ItemTitle>
              <ItemDescription>{t(description)}</ItemDescription>
            </SampleCard>
          </Link>
        ))}
      </Row>
    </>
  );
});

export default Home;

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});
