import React, { FC } from 'react';
import Head from 'next/head';

interface OGHeader {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const OGHeader: FC<OGHeader> = ({ title, description, image, url }) => (
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

export default OGHeader;
