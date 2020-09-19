import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, BUTTON_TYPE, color as COLOR, leaf } from '@nature/design';

export type Button = {
  children: ReactNode | string;
  icon?: string;
  color?: COLOR;
  buttonType?: BUTTON_TYPE;
  iconSize?: leaf;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: COLOR,
      },
    },
    iconSize: {
      control: {
        type: 'select',
        options: leaf,
      },
    },
    buttonType: {
      control: {
        type: 'select',
        options: BUTTON_TYPE,
      },
    },
    children: {
      control: {
        type: 'text',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

const Template: Story<Button> = (args) => <Button {...args} />;

export const Contained = Template.bind({});
Contained.args = {
  buttonType: BUTTON_TYPE.CONTAINED,
  icon: '😀',
  color: COLOR.secondary,
  iconSize: leaf._5,
  children: 'This is Button',
};

export const Outlined = Template.bind({});
Outlined.args = {
  buttonType: BUTTON_TYPE.OUTLINED,
  icon: '😀',
  color: COLOR.primary,
  iconSize: leaf._5,
};

export const Text = Template.bind({});
Text.args = {
  buttonType: BUTTON_TYPE.TEXT,
  icon: '😀',
  color: COLOR.white,
  iconSize: leaf._5,
};
