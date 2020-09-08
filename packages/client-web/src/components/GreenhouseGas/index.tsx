import React, { FC } from 'react';

import { greenhouseGasData } from 'src/constants';
import { PostSection } from 'src/components';

const GreenhouseGas: FC = () => (
  <PostSection
    title="Impact of major greenhouse gases 💥"
    data={greenhouseGasData}
  />
);

export default GreenhouseGas;
