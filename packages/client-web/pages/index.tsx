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
  ItemDescription,
  CardContainer
} from './style';

import { LINK_LIST, ogHeader } from '../dataContent';
import { OGHeader } from '../components/OG';
import { DarkModeToggleBox } from '../components/DarkModeSelector';
import { Nav } from '../components/Nav';
import { useStore } from '../src/utils/storeUtils';
import { Card } from '../components/common/Card';

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
              <SampleCard>
                <ItemTitle>{title} &rarr;</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
              </SampleCard>
            </Link>
          ))}
        </Row>
      </Main>
      <CardContainer>
        <Card
          titleIcon={'☘️'}
          titleIconSize={20}
          title={'Better Nature!'}
          subTitle={'SAVE THE WORLD, SAVE THE YOURSELF.'}
          subTitleLineClamp={2}
          paragraph={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet autem aliquam mollitia enim sapiente iure! Voluptate repellat, placeat numquam officiis amet quos, exercitationem qui enim consequuntur, impedit assumenda ullam eaque.'
          }
          paragraphLineClamp={5}
          button={'save'}
          buttonIcon={'🏔'}
        />
        <Card
          titleIcon={'☘️'}
          titleIconSize={20}
          title={'Better Nature!'}
          subTitle={'SAVE THE WORLD, SAVE THE YOURSELF.'}
          subTitleLineClamp={2}
          paragraph={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet autem aliquam mollitia enim sapiente iure! Voluptate repellat, placeat numquam officiis amet quos, exercitationem qui enim consequuntur, impedit assumenda ullam eaque.'
          }
          paragraphLineClamp={5}
          button={'save'}
          buttonIcon={'🏔'}
        />
        <Card
          titleIcon={'☘️'}
          titleIconSize={20}
          title={'Better Nature!'}
          subTitle={'SAVE THE WORLD, SAVE THE YOURSELF.'}
          subTitleLineClamp={2}
          paragraph={
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet autem aliquam mollitia enim sapiente iure! Voluptate repellat, placeat numquam officiis amet quos, exercitationem qui enim consequuntur, impedit assumenda ullam eaque.'
          }
          paragraphLineClamp={5}
          button={'save'}
          buttonIcon={'🏔'}
        />
      </CardContainer>
      <DarkModeToggleBox />
    </>
  );
});

export default Home;
