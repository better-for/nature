import React, { FC } from 'react';
import Link from 'next/link';
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
import { LINK_LIST } from '../temporaryData';
import { OGHeader } from '../components/OG';
import { DarkModeToggleBox } from '../components/DarkModeSelector';

const Home: FC = () => (
  <>
    <OGHeader
      title={`Better for`}
      description={`SAVE THE WORLD, SAVE THE YOURSELF.`}
      image={
        'https://postfiles.pstatic.net/MjAxOTA5MDdfMjc5/MDAxNTY3ODYxODA1MTIz.LpUixWaK3qEzhKA23EjEThjN0C81uwl6Ec9ii0-CGQAg.OFNWw1kvH1ugW_dZV_vqdK9Odnedcr9dpLXj-j5Jg7Ig.PNG.ggijnd/swsy_ver_2.png?type=w966'
      }
    />
    <GlobalStyle />
    <DarkModeToggleBox />
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
