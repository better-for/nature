import React from 'react';
import { observer } from 'mobx-react';
import { I18nPage, useTranslation } from 'I18n';

import { ChartContainer, Main } from 'src/style';
import {
  MainTitle,
  FoodChart,
  GreenhouseGas,
  GreenhouseEffect,
  CarbonFootPrint,
} from 'src/components';

const Chart: I18nPage = observer(() => {
  const { t } = useTranslation();

  return (
    <>
      <Main>
        <MainTitle>{t('Climatic change-related chart')}</MainTitle>
      </Main>
      <ChartContainer>
        <GreenhouseGas t={t} />
        <GreenhouseEffect t={t} />
        <CarbonFootPrint t={t} />
        <FoodChart t={t} />
      </ChartContainer>
    </>
  );
});

export default Chart;

Chart.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});
