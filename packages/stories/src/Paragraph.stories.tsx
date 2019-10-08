import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Paragraph } from '../../client-web/components/common/paragraph';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';

const stories = storiesOf('Components | Paragraph', module).addDecorator(
  withKnobs
);

stories.add(
  'Paragraph without lineClamp',
  withInfo({
    propTablesExclude: [Paragraph],
    text: `
    This is a paragraph component. Use to mark paragraphs of sentences.
    
    Prop Types: {lineClamp?:number}

    ~~~
    <Paragraph>text</Paragraph>
    ~~~

  `
  })(() => (
    <Paragraph
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50,
        padding: 20,
        border: `1px solid black`
      }}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </Paragraph>
  )),
  { info: { inline: true, header: true } }
);

stories.add(
  'Paragraph with lineClamp',
  withInfo({
    propTablesExclude: [Paragraph],
    text: `
    This is a paragraph component. Use to mark paragraphs of sentences.

    Prop Types: {lineClamp?:number}

    ~~~
    <Paragraph lineClamp={1} >text</Paragraph>
    ~~~

  `
  })(() => (
    <Paragraph
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50
      }}
      lineClamp={number('num', 2)}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </Paragraph>
  )),
  { info: { inline: true, header: true } }
);
