import React, { FC } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import {
  useTranslation,
  I18nPage,
  includeDefaultNamespaces
  // Link
} from '../I18n';

import {
  GlobalStyle,
  TitleSection,
  Main,
  Title,
  Point,
  Description,
  Row,
  SampleCard,
  ItemTitle,
  ItemDescription,
  ToggleContainer,
  FloatContainer,
  I18nButton
} from '../src/components/pageStyles';

import { LINK_LIST, ogHeader } from '../dataContent';
import OGHeader from '../src/components/OG';
import { useDarkMode } from '../src/utils/useDarkMode';
import { Toggle } from '../src/components/common';
import { LANGUAGE } from '../src/constants';

const Home: I18nPage = observer(() => {
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
      <OGHeader title={title} description={description} image={image} />
      <GlobalStyle isDarkTheme={isDarkTheme} />
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

export default Home;

Home.getInitialProps = async () => ({
  namespacesRequired: includeDefaultNamespaces(['Home'])
});
