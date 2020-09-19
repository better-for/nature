import React, { FC, useState, ReactNode } from 'react';

import { Icon } from 'src/components/common';

import { Section, Header, ToggleButton, Body } from './style';
import { glass, leaf } from '@nature/element';
import { BUTTON_TYPE } from '../Button/type';
import { useDarkModeTheme } from 'src/utils/storeUtils';

type Props = {
  header: ReactNode;
  size?: glass | leaf;
};

const Accordion: FC<Props> = ({ header, children, size = leaf._5 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isDarkTheme } = useDarkModeTheme();
  return (
    <Section>
      <Header role="button" onClick={() => setIsExpanded(prev => !prev)}>
        <div>{header}</div>
        <ToggleButton buttonType={BUTTON_TYPE.TEXT} isExpanded={isExpanded}>
          <Icon size={size}>△</Icon>
        </ToggleButton>
      </Header>
      <Body isExpanded={isExpanded} isDarkTheme={isDarkTheme}>
        {children}
      </Body>
    </Section>
  );
};

export default Accordion;
