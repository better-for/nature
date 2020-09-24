import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import PostSection, {
  InnerContent,
  IPostSection,
} from '@nature/client-web/src/components/PostSection';
import {
  carbonFootPrint,
  section,
  refLink,
  greenhouseEffect,
  wikiLink,
} from '@nature/client-web/src/constants';

export default {
  title: 'Design System/components/PostSection',
  component: PostSection,
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
    },
    title: {
      control: {
        type: 'text',
      },
    },
    ccContent: {
      control: {
        type: 'text',
      },
    },
    ccLink: {
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

const Template: Story<IPostSection> = (args) => <PostSection {...args} />;

export const PostSectionBox = Template.bind({});
PostSectionBox.args = {
  title: 'Greenhouse Effect ☀️',
  data: greenhouseEffect,
  ccLink: wikiLink,
  ccContent: 'wiki - greenhouse gas',
};

export const PostSectionBoxWithTodolist = Template.bind({});
PostSectionBoxWithTodolist.args = {
  title: 'What is a Carbon Footprint? 🐾',
  data: section,
  ccLink: refLink,
  ccContent: 'How to Reduce Your Carbon Footprint',
};

export const PostSectionBoxWithChildren = Template.bind({});
PostSectionBoxWithChildren.args = {
  title: 'What is a Carbon Footprint? 🐾',
  data: section,
  ccLink: refLink,
  ccContent: 'How to Reduce Your Carbon Footprint',
  children: (
    <InnerContent title={carbonFootPrint.title} desc={carbonFootPrint.desc} />
  ),
};
