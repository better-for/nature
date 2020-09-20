export * from './storeUtils';

import { TFunction } from 'next-i18next';

export const checkHasT = (t: TFunction | null, value: string): string =>
  t ? t(value) : value;
