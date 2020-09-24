import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Icon, leaf, glass } from '@nature/design';

export type Icon = {
  children: ReactNode | string;
  size?: glass | leaf;
};

export default {
  title: 'Design System/common/Icon',
  component: Icon,
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
  size: {
    control: {
      type: 'select',
      options: { ...leaf, ...glass },
    },
  },
  children: {
    control: {
      type: 'text',
    },
  },
} as Meta;

const Template: Story<Icon> = (args) => <Icon {...args} />;

export const IconBox = Template.bind({});
IconBox.args = {
  size: leaf._8,
  children: '🏔',
};
