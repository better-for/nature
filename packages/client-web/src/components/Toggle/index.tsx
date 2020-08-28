import React, { FC } from 'react';
import { observer } from 'mobx-react';
import 'mobx-react-lite/batchingForReactDom';
import { Container, Track, Checked, Thumb, ToggleImg } from './style';
import { moon_image, sun_image } from 'src/constants';

type Toggle = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const Toggle: FC<Toggle> = observer(({ isDarkTheme, toggleTheme }) => {
  return (
    <Container onClick={toggleTheme} isDarkTheme={isDarkTheme}>
      <Track>
        <Checked>
          <ToggleImg
            src={isDarkTheme ? moon_image : sun_image}
            alt={isDarkTheme ? 'moon_image' : 'sun_image'}
            role="presentation"
          />
        </Checked>
      </Track>
      <Thumb />
    </Container>
  );
});

export default Toggle;
