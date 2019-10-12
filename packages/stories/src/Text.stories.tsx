import * as React from 'react';
import { storiesOf } from '@storybook/react';
import {
  StyledTitle,
  StyledSubTitle,
  StyledParagraph,
  StyledHero,
  StyledSubHero,
  StyledLabel
} from '../styles/style';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';

const stories = storiesOf('Component | Text', module).addDecorator(withKnobs);

stories.add(
  'Hero',
  withInfo({
    text: `
    This is a Text component. Use to mark impact title of page.
    
    Prop Types: { lineClamp? : number }

    ~~~
    <StyledHero lineClamp={1} >왕제목</StyledHero>
    ~~~

  `
  })(() => (
    <StyledHero
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50,
        border: `1px solid black`
      }}
      lineClamp={number('num', 0)}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </StyledHero>
  )),
  { info: { inline: true, header: true } }
);

stories.add(
  'SubHero',
  withInfo({
    text: `
    This is a Text component. Use to mark impact title of page.
    
    Prop Types: { lineClamp? : number }

    ~~~
    <StyledSubHero lineClamp={1} >부왕제목</StyledSubHero>
    ~~~

  `
  })(() => (
    <StyledSubHero
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50,
        border: `1px solid black`
      }}
      lineClamp={number('num', 0)}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </StyledSubHero>
  )),
  { info: { inline: true, header: true } }
);

stories.add(
  'Title',
  withInfo({
    text: `
    This is a Text component. Use to mark title of sentences.
    
    Prop Types: { lineClamp? : number }

    ~~~
    <StyledTitle lineClamp={1} >제목</StyledTitle>
    ~~~

  `
  })(() => (
    <StyledTitle
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50,
        border: `1px solid black`
      }}
      lineClamp={number('num', 0)}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </StyledTitle>
  )),
  { info: { inline: true, header: true } }
);

stories.add(
  'SubTitle',
  withInfo({
    text: `
    This is a Text component. Use to mark subTitle of sentences.

    Prop Types: { lineClamp? : number }

    ~~~
    <StyledSubTitle lineClamp={1} >부제목</StyledSubTitle>
    ~~~

  `
  })(() => (
    <StyledSubTitle
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50,
        border: `1px solid black`
      }}
      lineClamp={number('num', 2)}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </StyledSubTitle>
  )),
  { info: { inline: true, header: true } }
);

stories.add(
  'Paragraph',
  withInfo({
    text: `
    This is a Text component. Use to mark paragraphs of sentences.

    Prop Types: { lineClamp? : number }

    ~~~
    <StyledParagraph lineClamp={1} >본문</StyledParagraph>
    ~~~

  `
  })(() => (
    <StyledParagraph
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50,
        border: `1px solid black`
      }}
      lineClamp={number('num', 2)}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </StyledParagraph>
  )),
  { info: { inline: true, header: true } }
);

stories.add(
  'Label',
  withInfo({
    text: `
    This is a Text component. Use to mark point of sentences.

    Prop Types: { lineClamp? : number }

    ~~~
    <StyledLabel lineClamp={1} >라벨</StyledLabel>
    ~~~

  `
  })(() => (
    <StyledLabel
      style={{
        width: `${number('width', 400)}px`,
        marginLeft: 50,
        border: `1px solid black`
      }}
      lineClamp={number('num', 2)}
    >
      {text(
        'text',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam recusandae ipsum quibusdam quidem corporis dolorem aliquam atque, explicabo earum. In commodi vel saepe enim sint, quisquam ducimus ad eveniet itaque?'
      )}
    </StyledLabel>
  )),
  { info: { inline: true, header: true } }
);
