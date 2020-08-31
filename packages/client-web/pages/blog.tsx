import React, { useEffect, useState } from 'react';
import { observer, inject } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { useTranslation, I18nPage } from '../I18n';

import { Card } from 'src/components/common';

import {
  TitleSection,
  Main,
  Title,
  Point,
  CardContainer
} from 'src/components/pageStyles';
import { theme } from 'src/element';
import { useStore } from 'src/utils/storeUtils';
import { Blogs } from 'src/apis/blogs';

// type Blog = {
//   blogList: Blogs;
// };

const Blog: I18nPage = observer(() => {
  const { t } = useTranslation();

  const {
    uiStore: { blogStore }
  } = useStore();
  const { blogsData, fetchBlogs } = blogStore;
  const [blogList, setBlogList] = useState<Blogs>([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    setBlogList(blogsData);
  }, [blogsData]);

  return (
    <>
      <Main>
        <TitleSection>
          <Title>
            {t('Eco-friendly')} <Point>{t('Blogs')}</Point>
          </Title>
        </TitleSection>
      </Main>
      <CardContainer>
        {blogList.map(({ title, image, url, id, description }) => {
          return (
            <Card
              url={url}
              image={image}
              imageRatio={4 / 1}
              titleIcon={!image && '🌱'}
              titleIconSize={theme.unit.glass._4}
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

Blog.getInitialProps = async ctx => {
  // console.log(ctx);
  // const { blogsData, fetchBlogs } = mobxStore.uiStore.blogStore;
  // await fetchBlogs();
  return {
    // blogList: blogsData,
    namespacesRequired: ['common']
  };
};

export default Blog;
