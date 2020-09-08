import React, { FC } from 'react';
import { useTranslation } from 'I18n';

import { greenhouseEffect } from 'src/constants';
import {
  Container,
  Subject,
  Content,
  Wrapper,
  Cc
} from '../GreenhouseGas/style';
import { Accordion } from 'src/components/common';

const GreenhouseEffect: FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Subject>{t('Greenhouse effects')}</Subject>
      <Content>
        {greenhouseEffect.map(({ title, desc }) => (
          <Wrapper key={title}>
            <Accordion header={t(title)} isDarkTheme={isDarkTheme}>
              {t(desc)}
            </Accordion>
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

export default GreenhouseEffect;
