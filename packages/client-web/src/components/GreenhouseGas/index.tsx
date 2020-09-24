import React, { FC } from 'react';

import { greenhouseGasData } from 'src/constants';
import { PostSection } from 'src/components';
import { TFunction } from 'next-i18next';

const GreenhouseGas: FC<{ t?: TFunction }> = ({ t }) => {
  return (
    <PostSection
      title="Impact of major greenhouse gases 💥"
      data={greenhouseGasData}
      t={t}
    />
  );
};

export default GreenhouseGas;
