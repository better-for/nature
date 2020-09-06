import React, { FC } from 'react';
import { useTranslation } from 'I18n';

import { greenhouseGasData } from 'src/constants';
import { Container, Subject, Title, Content, Desc, Wrapper, Cc } from './style';

const GreenHouseGas: FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Subject>{t('Impact of major greenhouse gases')}</Subject>
      <Content>
        {greenhouseGasData.map(({ title, desc }) => (
          <Wrapper key={title}>
            <Title>{t(title)}</Title>
            <Desc>{t(desc)}</Desc>
          </Wrapper>
        ))}
      </Content>
      <Cc
        href="https://ko.wikipedia.org/wiki/%EC%98%A8%EC%8B%A4_%EA%B8%B0%EC%B2%B4"
        rel="noopener noreferrer"
        target="_blank"
      >
        출처: 온실가스_wiki
      </Cc>
    </Container>
  );
};

export default GreenHouseGas;
