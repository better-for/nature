import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useTranslation, I18nPage } from 'I18n';

import { MainTitle } from 'src/components';

import { Main, Point, CardContainer, StyledLogo } from 'src/style';
import { useStore } from 'src/utils';
import { Blogs } from 'src/apis/blogs';
import { ActionStatus } from 'src/constants';
import { glass, Card } from '@nature/design';

const Blog: I18nPage = observer(() => {
  const { t } = useTranslation();

  const {
    uiStore: { blogStore },
  } = useStore();
  const { blogsData, fetchBlogs, status } = blogStore;
  const [blogList, setBlogList] = useState<Blogs['data']>([]);

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
        {status === ActionStatus.Request && (
          <div id="loading-start" aria-live="assertive" role="alert">
            <StyledLogo width={glass._40} />
          </div>
        )}
        {status === ActionStatus.Success && (
          <div
            id="loading-end"
            aria-live="assertive"
            style={{ display: 'flex', flexWrap: 'wrap' }}
          >
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
          </div>
        )}
      </CardContainer>
    </>
  );
});

Blog.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  };
};

export default Blog;
