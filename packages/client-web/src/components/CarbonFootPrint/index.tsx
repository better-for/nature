import React, { FC } from 'react';
import {
  carbonFootPrint,
  listOfWaysToReduceCarbonEmissions as todoList,
  section,
  refLink
} from 'src/constants';
import PostSection, { InnerContent } from 'src/components/PostSection';

const CarbonFootPrint: FC<{ isDarkTheme: boolean }> = ({ isDarkTheme }) => {
  const { title, desc } = carbonFootPrint;

  return (
    <PostSection
      isDarkTheme={isDarkTheme}
      title="What is a Carbon Footprint? 🐾"
      data={section}
      todoList={todoList}
      ccLink={refLink}
      ccContent="How to Reduce Your Carbon Footprint"
    >
      <InnerContent title={title} desc={desc} isDarkTheme={isDarkTheme} />
    </PostSection>
  );
};

export default CarbonFootPrint;
