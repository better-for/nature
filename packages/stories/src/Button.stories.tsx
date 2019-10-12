import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../client-web/components/common/Button';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { theme } from '@nature/element';
import { BUTTON_TYPE } from '../../client-web/components/common/Button/type';

const stories = storiesOf('Component', module).addDecorator(withKnobs);

stories.add(
  'Button',
  withInfo({
    text: `
    This is a Button component. Use to confirm or check something.
    
    Prop Types: { 
      type = BUTTON_TYPE.CONTAINED,
      icon,
      color = theme.color.secondary,
     }

    ~~~

    <Button 
      type={BUTTON_TYPE.CONTAINED}
      icon={'🏔'},
      color={theme.color.secondary} 
    >
      버튼
    </Button>

    ~~~

  `
  })(() => (
    <Button
      style={{
        margin: 50
      }}
      type={select('type', BUTTON_TYPE, BUTTON_TYPE.CONTAINED)}
      icon={text('icon', '🏔')}
      color={select('colors', theme.color, theme.color.secondary)}
    >
      {text('content', 'Button')}
    </Button>
  )),
  { info: { inline: true, header: true } }
);
