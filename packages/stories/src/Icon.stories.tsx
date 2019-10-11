import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../../client-web/components/common/IconBox';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select } from '@storybook/addon-knobs';
import { theme } from '@nature/element';

const stories = storiesOf('Component', module).addDecorator(withKnobs);

stories.add(
  'Icon',
  withInfo({
    text: `
    This is a Icon component. Use to input icon.
    
    Prop Types: { size? : string }

    ~~~
    <Icon size={theme.unit.leaf._5} >🏔</Icon>
    ~~~

  `
  })(() => (
    <Icon
      style={{
        marginLeft: 50
      }}
      size={select('size', theme.unit.leaf, theme.unit.leaf._8)}
    >
      🏔
    </Icon>
  )),
  { info: { inline: true, header: true } }
);
