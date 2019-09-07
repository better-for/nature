import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Nav from '../components/nav';
import { HeaderTitle, Hero, Title, Description, Row, Card } from './style';
import { nextSampleData } from '../temporaryData/index'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <Nav />

    <Hero>
      <Title>Better For</Title>
      <HeaderTitle>Nature</HeaderTitle>
      <Description>
        <code>Save the World, Save the Yourself</code>.
      </Description>
      <Row>
        {nextSampleData.map((sampleData,i) => (
          <Link href={sampleData.link} key={i}>
            <Card>
              <h3>{sampleData.h3} &rarr;</h3>
              <p>{sampleData.p}</p>
            </Card>
          </Link>
        ))}
      </Row>
    </Hero>
  </>
);

export default Home;
