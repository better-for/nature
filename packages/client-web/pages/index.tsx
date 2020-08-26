import React from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { I18nPage, useTranslation, Link } from '../I18n';

import OGHeader from '../src/components/OG';
import Toggle from '../src/components/Toggle';
import I18nButton from '../src/components/I18nButton';
import { LINK_LIST, ogHeader } from '../dataContent';
import { useDarkMode } from '../src/utils/useDarkMode';

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
  FloatContainer
} from '../src/components/pageStyles';

const Home: I18nPage = observer(() => {
  const { title, description, image } = ogHeader;
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const { t } = useTranslation();

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
        <I18nButton isDarkTheme={isDarkTheme} />
      </FloatContainer>
    </>
  );
});

export default Home;

Home.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
