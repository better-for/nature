import React, { FC } from 'react';
import { useTranslation } from 'I18n';

import { greenhouseGasData } from 'src/constants';
import { Container, Subject, Content, Wrapper } from './style';
import Accordion from '../common/Accordion';

const GreenhouseGas: FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Subject>{t('Impact of major greenhouse gases')}</Subject>
      <Content>
        {greenhouseGasData.map(({ title, desc }) => (
          <Wrapper key={title}>
            <Accordion header={t(title)} isDarkTheme={isDarkTheme}>
              {t(desc)}
            </Accordion>
          </Wrapper>
        ))}
      </Content>
    </Container>
  );
};

export default GreenhouseGas;
