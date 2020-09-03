import React, { FC } from 'react';

import { TitleSection, Title } from './style';

const MainTitle: FC = ({ children }) => {
  return (
    <TitleSection>
      <Title>{children}</Title>
    </TitleSection>
  );
};

export default MainTitle;
