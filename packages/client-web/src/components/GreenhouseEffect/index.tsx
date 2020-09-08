import React, { FC } from 'react';

import { greenhouseEffect, wikiLink } from 'src/constants';
import { PostSection } from 'src/components';

const GreenhouseEffect: FC = () => (
  <PostSection
    title="Greenhouse Effect ☀️"
    data={greenhouseEffect}
    ccLink={wikiLink}
    ccContent="wiki - greenhouse gas"
  />
);

export default GreenhouseEffect;
