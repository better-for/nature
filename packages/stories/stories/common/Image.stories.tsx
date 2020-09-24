import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Image } from '@nature/design';

export type Image = {
  src: string;
  ratio?: number;
};

export default {
  title: 'Design System/common/Image',
  component: Image,
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Image> = (args) => <Image {...args} />;

export const ImageBox = Template.bind({});
ImageBox.args = {
  src: 'https://better-for.vercel.app/static/og_image.png',
  ratio: 4,
};
