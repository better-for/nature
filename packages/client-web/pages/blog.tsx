import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { useTranslation, I18nPage } from 'I18n';

import { MainTitle } from 'src/components';
import { Card } from 'src/components/common';

import { Main, Point, CardContainer, StyledLogo } from 'src/style';
import { useStore } from 'src/utils/storeUtils';
import { Blogs } from 'src/apis/blogs';
import { ActionStatus } from 'src/constants';
import { glass } from 'src/element/Unit';

const Blog: I18nPage = observer(() => {
  const { t } = useTranslation();

  const {
    uiStore: { blogStore }
  } = useStore();
  const { blogsData, fetchBlogs, status } = blogStore;
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
        <MainTitle>
          {t('Eco-friendly')} <Point>{t('Blogs')}</Point>
        </MainTitle>
      </Main>
      <CardContainer>
        {status === ActionStatus.Request && <StyledLogo width={glass._60} />}
        {blogList.map(({ title, url, id, description }) => (
          <Card
            rel="noopener noreferrer"
            target="_blank"
            url={url}
            title={title}
            paragraph={description}
            paragraphLineClamp={3}
            key={id}
          />
        ))}
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
