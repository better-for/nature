import React, { FC, useState, ReactNode } from 'react';

import { Icon } from 'src/components/common';

import { Section, Header, ToggleButton, Body } from './style';
import { glass, leaf } from 'src/element';
import { BUTTON_TYPE } from '../Button/type';

type Props = {
  header: ReactNode;
  isDarkTheme: boolean;
  size?: glass | leaf;
};

const Accordion: FC<Props> = ({
  header,
  children,
  isDarkTheme,
  size = leaf._5
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Section>
      <Header role="button" onClick={() => setIsExpanded(prev => !prev)}>
        <div>{header}</div>
        <ToggleButton type={BUTTON_TYPE.TEXT} isExpanded={isExpanded}>
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
