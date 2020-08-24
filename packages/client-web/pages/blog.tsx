import React, { FC } from 'react';
import Router from 'next/router';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import {
  TitleSection,
  Main,
  Title,
  Point,
  CardContainer,
  BackButton
} from '../src/components/pageStyles';
import { ogHeader } from '../dataContent';
import OGHeader from '../src/components/OG';
import { Card } from '../src/components/common';
import { ECO_FRIENDLY_BLOGS } from '../dataContent';

const Blog: FC = observer(() => {
  const { title, description, image } = ogHeader;

  return (
    <>
      <OGHeader title={title} description={description} image={image} />
      <BackButton onClick={() => Router.back()}>&larr; Back</BackButton>
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

export default Blog;
