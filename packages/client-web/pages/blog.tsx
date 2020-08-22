import React, { FC } from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react';
import {
  TitleSection,
  Main,
  Title,
  Point,
  Row,
  ItemTitle,
  ItemDescription,
  CardContainer
} from './style';

import { ogHeader } from '../dataContent';
import { OGHeader } from '../components/OG';
import { Card } from '../components/common/Card';
import { ECO_FRIENDLY_BLOGS } from '../dataContent';

const Home: FC = observer(() => {
  const { title, description, image } = ogHeader;

  return (
    <>
      <OGHeader title={title} description={description} image={image} />
      <Main>
        <TitleSection>
          <Title>
            Eco-friendly <Point>Blogs</Point>
          </Title>
        </TitleSection>
      </Main>
      <CardContainer>
        {ECO_FRIENDLY_BLOGS.map(({ title, image, url, id, description }) => {
          return (
            <Card
              url={url}
              image={image}
              imageRatio={4 / 1}
              titleIcon={!image && '🌱'}
              titleIconSize={'30px'}
              title={!image && title}
              titleLineClamp={1}
              paragraph={description}
              paragraphLineClamp={3}
              key={id}
            />
          );
        })}
      </CardContainer>
    </>
  );
});

export default Home;
