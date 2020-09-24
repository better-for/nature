import React, { FC } from 'react';
import { carbonFootPrint, section, refLink } from 'src/constants';
import PostSection, { InnerContent } from 'src/components/PostSection';
import { TFunction } from 'next-i18next';

const CarbonFootPrint: FC<{ t?: TFunction }> = ({ t }) => {
  const { title, desc } = carbonFootPrint;

  return (
    <PostSection
      title="What is a Carbon Footprint? 🐾"
      data={section}
      ccLink={refLink}
      ccContent="How to Reduce Your Carbon Footprint"
      t={t}
    >
      <InnerContent title={title} desc={desc} t={t} />
    </PostSection>
  );
};

export default CarbonFootPrint;
