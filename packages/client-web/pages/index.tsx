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
  SampleCard,
  ItemTitle,
  ItemDescription
} from './style';

import { LINK_LIST, ogHeader } from '../dataContent';
import { OGHeader } from '../components/OG';
import { DarkModeToggleBox } from '../components/DarkModeSelector';

const Home: FC = observer(() => {
  const { title, description, image } = ogHeader;

  return (
    <>
      <OGHeader title={title} description={description} image={image} />
      <GlobalStyle />
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
      <DarkModeToggleBox />
    </>
  );
});

export default Home;
