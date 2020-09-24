import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Divider, color as COLOR } from '@nature/design';

export type Divider = {
  color?: COLOR;
};

export default {
  title: 'Design System/common/Divider',
  component: Divider,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: COLOR,
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

const Template: Story<Divider> = (args) => <Divider {...args} />;

export const DividerBox = Template.bind({});
DividerBox.args = {
  color: COLOR.primary,
};
