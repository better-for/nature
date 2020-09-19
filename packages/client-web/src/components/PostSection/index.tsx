import React, { FC, ReactNode } from 'react';
import { useTranslation } from 'I18n';

import { Container, Subject, Content, Wrapper, Cc, Li } from './style';
import { Accordion } from 'src/components';

type PostSection = {
  title: string;
  data: { title: string; desc: string }[];
  ccLink?: string;
  ccContent?: string;
  todoList?: ReactNode;
};

type InnerContent = Omit<PostSection, 'data' | 'ccContent' | 'ccLink'> & {
  desc: string;
};

export const InnerContent: FC<InnerContent> = ({ title, desc, todoList }) => {
  const { t } = useTranslation();
  return (
    <Wrapper key={title}>
      <Accordion header={t(title)}>
        {t(desc)}
        {todoList && (
          <ul>
            {todoList[title].map(item => (
              <Li key={item}>{t(item)}</Li>
            ))}
          </ul>
        )}
      </Accordion>
    </Wrapper>
  );
};

const PostSection: FC<PostSection> = ({
  title,
  data,
  todoList,
  ccLink,
  ccContent,
  children
}) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Subject>{t(title)}</Subject>
      <Content>
        {children}
        {data.map(({ title, desc }) => (
          <InnerContent
            title={title}
            desc={desc}
            key={title}
            todoList={todoList}
          />
        ))}
      </Content>
      {ccContent && ccLink && (
        <Cc href={ccLink} rel="noopener noreferrer" target="_blank">
          {ccContent}
        </Cc>
      )}
    </Container>
  );
};

export default PostSection;
