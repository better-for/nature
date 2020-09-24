import React, { ReactNode } from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import { Accordion } from '@nature/design';

export type Accordion = {
  header: ReactNode;
  children: ReactNode;
};

export default {
  title: 'Design System/common/Accordion',
  component: Accordion,
  argTypes: {
    header: {
      control: {
        type: 'text',
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

const Template: Story<Accordion> = (args) => (
  <div
    style={{
      margin: '3em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <Accordion {...args} />
  </div>
);

export const AccordionBox = Template.bind({});
AccordionBox.args = {
  header: 'This is a Header section.',
  children:
    'This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 This is a content section. 😀 ',
};
