import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../../client-web/components/common/IconBox';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number } from '@storybook/addon-knobs';

const stories = storiesOf('Component', module).addDecorator(withKnobs);

stories.add(
  'Icon',
  withInfo({
    text: `
    This is a Icon component. Use to input icon.
    
    Prop Types: { size? : string }

    ~~~
    <Icon size={'20px'} >🏔</Icon>
    ~~~

  `
  })(() => (
    <Icon
      style={{
        marginLeft: 50
      }}
      size={`${number('size', 20)}px`}
    >
      🏔
    </Icon>
  )),
  { info: { inline: true, header: true } }
);