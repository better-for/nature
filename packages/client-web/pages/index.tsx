import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {
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
import { LINK_LIST } from '../temporaryData/index';
import { OGHome } from './OG/index';
import Nav from '../components/Nav/Nav';
import { useStore } from '../src/utils/storeUtils';
import { observer } from 'mobx-react';

const Home = observer(() => {
  const { uiStore } = useStore();
  const { navigation } = uiStore;

  return (
    <>
      <Head>
        <OGHome />
      </Head>
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
    </>
  );
});

export default Home;
