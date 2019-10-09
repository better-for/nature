import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from '../../client-web/components/common/Divider';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { theme } from '@nature/element';

const stories = storiesOf('Component', module).addDecorator(withKnobs);

stories.add(
  'Divider',
  withInfo({
    text: `
    This is a Divider component. Use to divide section.
    
    Prop Types: { color? : string }

    ~~~
    <Divider color={'black'} />
    ~~~

  `
  })(() => (
    <Divider
      style={{
        width: `${number('width', 400)}px`,
        height: `${number('height', 1)}px`,
        marginLeft: 50
      }}
      color={select('colors', theme.color, theme.color.gray)}
    />
  )),
  { info: { inline: true, header: true } }
);
