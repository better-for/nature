import { TFunction } from 'next-i18next';

export type FoodData = {
  'Food product': string;
  'Land use change': string;
  'Animal Feed': string;
  Farm: string;
  Processing: string;
  Transport: string;
  Packging: string;
  Retail: string;
};

export type Type = [
  'Food product',
  'Land use change',
  'Animal Feed',
  'Farm',
  'Processing',
  'Transport',
  'Packging',
  'Retail'
];

export const extractRawData = (
  input: string,
  t: TFunction | undefined
): FoodData[] => {
  const dividedRawData = input
    .split(/\r?\n/)
    .map((el) => el.split(',').filter(Boolean));

  const dataTitles = dividedRawData.slice()[0];

  const output = dividedRawData.slice(1).map((item) =>
    item.reduce((acc, curr, i) => {
      if (i === 0) {
        acc[(dataTitles as Type)[i]] = t ? t(curr) : curr;
      } else {
        acc[(dataTitles as Type)[i]] = curr;
      }
      return acc;
    }, {} as FoodData)
  );

  return output;
};

export const sumTotalValue = (input: FoodData): number => {
  return Object.values(input)
    .map(parseFloat)
    .filter(Boolean)
    .reduce((acc, curr) => acc + curr, 0);
};

export * from './useDarkMode';
export * from './useScrollPosition';
