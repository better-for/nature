import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { I18nPage, useTranslation } from 'I18n';

import { Main, ChartContainer } from 'src/style';
import {
  MainTitle,
  FoodChart,
  GreenhouseGas,
  GreenhouseEffect
} from 'src/components';

declare global {
  interface Window {
    Highcharts: null;
  }
}

const Chart: I18nPage<{ isDarkTheme: boolean }> = observer(
  ({ isDarkTheme }) => {
    const { t } = useTranslation();
    const theme = isDarkTheme ? 'dark-unica' : 'default';
    const scriptSrc = `https://www.climatelevels.org/graphs/js/co2.php?theme=${theme}&pid=2degreesinstitute`;

    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = scriptSrc;
      script.async = true;

      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
        window.Highcharts = null;
      };
    }, [isDarkTheme]);

    return (
      <>
        <Main>
          <MainTitle>{t('Climatic change-related chart')}</MainTitle>
        </Main>
        <GreenhouseGas isDarkTheme={isDarkTheme} />
        <GreenhouseEffect isDarkTheme={isDarkTheme} />
        <FoodChart />
        <ChartContainer>
          <div id="co2-widget-container"></div>
        </ChartContainer>
      </>
    );
  }
);

export default Chart;

Chart.getInitialProps = async () => ({
  namespacesRequired: ['common']
});
