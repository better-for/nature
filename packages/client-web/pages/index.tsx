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

const Home = () => (
  <>
    <Head>
      <OGHome />
    </Head>
    <Main>
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

export default Home;
