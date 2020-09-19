import React, { ReactNode } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Text } from '@nature/design';

export type IText = {
  children: ReactNode | string;
  lineClamp?: number;
};

export default {
  title: 'Example/Text',
  component: Text,
} as Meta;

const Template: Story<IText> = (args) => <Text {...args} />;

export const Text_1 = Template.bind({});
Text_1.args = {
  lineClamp: 2,
  children: 'This is Text component.',
};
