import React, { FC } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
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
  ToggleContainer
} from './style';

import { LINK_LIST, ogHeader } from '../dataContent';
import { OGHeader } from '../components/OG';
import { useDarkMode } from '../src/utils/useDarkMode';
import { Toggle } from '../components/common';

const Home: FC = observer(() => {
  const { title, description, image } = ogHeader;
  const [isDarkTheme, toggleTheme] = useDarkMode();
  return (
    <>
      <OGHeader title={title} description={description} image={image} />
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <Main>
        <TitleSection>
          <Title>
            Better for <Point>Nature</Point>
          </Title>
        </TitleSection>
        <Description>
          <code>SAVE THE WORLD, SAVE THE YOURSELF.</code>
        </Description>
        <Row>
          {LINK_LIST.map(({ link, title, description }) => (
            <Link href={link} key={title}>
              <SampleCard>
                <ItemTitle>{title} &rarr;</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
              </SampleCard>
            </Link>
          ))}
        </Row>
      </Main>
      <ToggleContainer>
        <Toggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      </ToggleContainer>
    </>
  );
});

export default Home;
