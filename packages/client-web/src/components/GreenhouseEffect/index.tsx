import React, { FC } from 'react';

import { greenhouseEffect, wikiLink } from 'src/constants';
import { PostSection } from 'src/components';
import { TFunction } from 'next-i18next';

const GreenhouseEffect: FC<{ t?: TFunction }> = ({ t }) => {
  return (
    <PostSection
      title="Greenhouse Effect ☀️"
      data={greenhouseEffect}
      ccLink={wikiLink}
      ccContent="wiki - greenhouse gas"
      t={t}
    />
  );
};

export default GreenhouseEffect;
