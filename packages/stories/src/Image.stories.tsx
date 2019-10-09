import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { StyledImage } from '../styles/style';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import { DEFAULT_IMAGE } from '../../client-web/dataContent';

const stories = storiesOf('Component', module).addDecorator(withKnobs);

stories.add(
  'Image',
  withInfo({
    text: `
    This is a Image component. Use to adjust image ratio.
    
    Prop Types: { 
        src? : string, 
        ratio? : number
    }

    ~~~
    <Image size={16/9} src={'image address'} />
    ~~~

  `
  })(() => (
    <StyledImage
      style={{
        marginLeft: 50
      }}
      ratio={number('size', 1)}
      src={text('src', DEFAULT_IMAGE)}
    />
  )),
  { info: { inline: true, header: true } }
);
