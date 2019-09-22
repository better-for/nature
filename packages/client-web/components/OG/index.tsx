import React, { FC } from 'react';
import Head from 'next/head';

interface OGHeaderProps {
  title: string | undefined;
  description: string | undefined;
  image?: string | undefined;
  url?: string | undefined;
}

export const OGHeader: FC<OGHeaderProps> = ({
  title,
  description,
  image,
  url
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta key="image_src" name="image_src" content={image} />
      <meta key="og:type" name="og:type" content={`website`} />
      <meta key="og:title" name="og:title" content={title} />
      <meta key="og:description" name="og:description" content={description} />
      <meta key="og:url" name="og:url" content={url || 'url'} /> //TODO: Change
      <meta key="og:image" name="og:image" content={image} />
    </Head>
  );
};
