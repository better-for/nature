import React, { FC } from 'react';
import { Container, Track, Checked, Thumb, ToggleImg } from './style';
import { moon_image, sun_image } from 'src/constants';
import { useDarkModeTheme } from 'src/utils';

const Toggle: FC = () => {
  const { isDarkTheme, toggleTheme } = useDarkModeTheme();
  const toggleImgSrc = isDarkTheme ? moon_image : sun_image;
  const alt = isDarkTheme ? 'moon' : 'sun';
  return (
    <Container
      onClick={toggleTheme}
      isDarkTheme={isDarkTheme}
      aria-label="Button to convert to dark mode"
    >
      <Track>
        <Checked>
          <ToggleImg src={toggleImgSrc} alt={alt} />
        </Checked>
      </Track>
      <Thumb />
    </Container>
  );
};

export default Toggle;
