import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { color as COLOR, Text } from '@nature/design';

export type IText = {
  children: ReactNode;
  lineClamp?: number;
};

export default {
  title: 'Design System/common/Text',
  component: Text,
  decorators: [
    (Story) => (
      <div
        style={{
          margin: '3em',
          border: `1px solid ${COLOR.gray}`,
        }}
      >
        <Story />
      </div>
    ),
  ],
  children: {
    control: {
      type: 'text',
    },
  },
} as Meta;

const Template: Story<IText> = (args) => <Text {...args} />;

export const TextBox = Template.bind({});
TextBox.args = {
  lineClamp: 2,
  children: 'This is Text component.',
};
