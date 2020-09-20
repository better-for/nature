import React, { FC, useState, ReactNode } from 'react';

import { Section, Header, ToggleButton, Body } from './style';
import { Icon, BUTTON_TYPE } from '@nature/design';

type Props = {
  header: ReactNode;
  children: ReactNode;
};

const Accordion: FC<Props> = ({ header, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Section>
      <Header role="button" onClick={() => setIsExpanded((prev) => !prev)}>
        <div>{header}</div>
        <ToggleButton buttonType={BUTTON_TYPE.TEXT} isExpanded={isExpanded}>
          <Icon>△</Icon>
        </ToggleButton>
      </Header>
      <Body isExpanded={isExpanded}>{children}</Body>
    </Section>
  );
};

export default Accordion;
