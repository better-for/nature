import React, { FC } from 'react';

import { Container, Subject, Content, Wrapper, Cc, Li } from './style';
import { Accordion } from '@nature/design';
import { TFunction } from 'next-i18next';
import { Section } from 'src/constants';

export type IPostSection = {
  title: string;
  data: Section[];
  ccLink?: string;
  ccContent?: string;
  t?: TFunction;
};

type InnerContent = Section & { t: TFunction };

export const InnerContent: FC<InnerContent> = ({
  title,
  desc,
  todolist,
  t,
}) => {
  return (
    <Wrapper key={title}>
      <Accordion header={t ? t(title) : title}>
        {t ? t(desc) : desc}
        {todolist ? (
          <ul>
            {todolist.map((item: string) => (
              <Li key={item}>{t ? t(item) : item}</Li>
            ))}
          </ul>
        ) : null}
      </Accordion>
    </Wrapper>
  );
};

const PostSection: FC<IPostSection> = ({
  title,
  data,
  ccLink,
  ccContent,
  children,
  t,
}) => {
  return (
    <Container>
      <Subject>{t ? t(title) : title}</Subject>
      <Content>
        {children}
        {data.map(({ title, desc, todolist }) => (
          <InnerContent
            title={title}
            desc={desc}
            key={title}
            todolist={todolist}
            t={t}
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
