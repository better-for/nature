import React from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { I18nPage, useTranslation } from 'I18n';

import { Main } from 'src/style';
import {
  MainTitle,
  FoodChart,
  GreenhouseGas,
  GreenhouseEffect,
  CarbonFootPrint
} from 'src/components';

const Chart: I18nPage = observer(() => {
  const { t } = useTranslation();

  return (
    <>
      <Main>
        <MainTitle>{t('Climatic change-related chart')}</MainTitle>
      </Main>
      <GreenhouseGas />
      <GreenhouseEffect />
      <CarbonFootPrint />
      <FoodChart />
    </>
  );
});

export default Chart;

Chart.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
