import React, { FC } from 'react';
import { useTranslation } from 'I18n';

import {
  carbonFootPrint,
  listOfWaysToReduceCarbonEmissions as todoList,
  section
} from 'src/constants';
import {
  Container,
  Subject,
  Content,
  Wrapper,
  Cc
} from '../GreenhouseGas/style';
import { Accordion } from 'src/components/common';
import { Li } from './style';

const CarbonFootPrint: FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const { t } = useTranslation();
  const { title, desc } = carbonFootPrint;

  return (
    <Container>
      <Subject>{t('What is a Carbon Footprint?')}</Subject>
      <Content>
        <Wrapper key={title}>
          <Accordion header={t(title)} isDarkTheme={isDarkTheme}>
            {t(desc)}
          </Accordion>
        </Wrapper>
        {section.map(({ title, desc }) => (
          <Wrapper key={title}>
            <Accordion header={t(title)} isDarkTheme={isDarkTheme}>
              {t(desc)}
              <ul>
                {todoList[title].map(item => (
                  <Li>{t(item)}</Li>
                ))}
              </ul>
            </Accordion>
          </Wrapper>
        ))}
      </Content>
      <Cc
        href="https://www.nytimes.com/guides/year-of-living-better/how-to-reduce-your-carbon-footprint"
        rel="noopener noreferrer"
        target="_blank"
      >
        How to Reduce Your Carbon Footprint
      </Cc>
    </Container>
  );
};

export default CarbonFootPrint;
