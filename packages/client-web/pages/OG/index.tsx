import React, { FC } from 'react';

export const OGHome: FC = () => {
  const title = `Better for`;
  const description = `SAVE THE WORLD, SAVE THE YOURSELF.`;
  const image =
    'https://postfiles.pstatic.net/MjAxOTA5MDdfMjc5/MDAxNTY3ODYxODA1MTIz.LpUixWaK3qEzhKA23EjEThjN0C81uwl6Ec9ii0-CGQAg.OFNWw1kvH1ugW_dZV_vqdK9Odnedcr9dpLXj-j5Jg7Ig.PNG.ggijnd/swsy_ver_2.png?type=w966';
  return (
    <>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta key="image_src" name="image_src" content={image} />
      <meta key="og:type" name="og:type" content={`website`} />
      <meta key="og:title" name="og:title" content={title} />
      <meta key="og:description" name="og:description" content={description} />
      <meta key="og:url" name="og:url" content={'url'} /*TODO: Change*/ />
      <meta key="og:image" name="og:image" content={image} />
    </>
  );
};
