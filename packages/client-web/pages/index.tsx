import React, { FC } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import {
  GlobalStyle,
  TitleSection,
  Main,
  Title,
  Point,
  Description,
  Row,
  Card,
  ItemTitle,
  ItemDescription
} from './style';
import { LINK_LIST, ogHeader } from '../dataContent';
import { OGHeader } from '../components/OG';
import { DarkModeToggleBox } from '../components/DarkModeSelector';
import { Nav } from '../components/Nav';
import { useStore } from '../src/utils/storeUtils';

const Home: FC = observer(() => {
  const { uiStore } = useStore();
  const { navigation } = uiStore;
  const { title, description, image } = ogHeader;

  return (
    <>
      <OGHeader title={title} description={description} image={image} />
      <GlobalStyle />
      <Main>
        <button onClick={navigation.toggle}>🍔</button>
        {navigation.opened && <Nav />}
        <TitleSection>
          <Title>
            Better For <Point>Nature</Point>
          </Title>
        </TitleSection>
        <Description>
          <code>SAVE THE WORLD, SAVE THE YOURSELF.</code>
        </Description>
        <Row>
          {LINK_LIST.map(({ link, title, description }) => (
            <Link href={link} key={title}>
              <Card>
                <ItemTitle>{title} &rarr;</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
              </Card>
            </Link>
          ))}
        </Row>
      </Main>
      <DarkModeToggleBox />
    </>
  );
});

export default Home;
