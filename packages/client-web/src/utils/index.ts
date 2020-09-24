export * from './storeUtils';

import { TFunction } from 'next-i18next';
import { FOOD_CHART_DATA } from 'src/constants';

export const checkHasT = (
  t: TFunction | null | undefined,
  value: string
): string => (t ? t(value) : value);

export const setChartColor = (fooChartData: FOOD_CHART_DATA): string => {
  const {
    Land_use_change,
    Animal_Feed,
    Farm,
    Processing,
    Transport,
    Packging,
    Retail,
  } = FOOD_CHART_DATA;
  switch (fooChartData) {
    case Land_use_change:
      return '#1864ab';
    case Animal_Feed:
      return '#0b7285';
    case Farm:
      return '#087f5b';
    case Processing:
      return '#2b8a3e';
    case Transport:
      return '#5c940d';
    case Packging:
      return '#e67700';
    case Retail:
      return '#666666';
    default:
      return 'transparent';
  }
};
