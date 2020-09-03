import React, { FC } from 'react';
import { Container, Track, Checked, Thumb, ToggleImg } from './style';
import { moon_image, sun_image } from 'src/constants';

type Toggle = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};

const Toggle: FC<Toggle> = ({ isDarkTheme, toggleTheme }) => {
  const toggleImgSrc = isDarkTheme ? moon_image : sun_image;
  const alt = isDarkTheme ? 'moon' : 'sun';
  return (
    <Container onClick={toggleTheme} isDarkTheme={isDarkTheme}>
      <Track>
        <Checked>
          <ToggleImg src={toggleImgSrc} alt={alt} role="presentation" />
        </Checked>
      </Track>
      <Thumb />
    </Container>
  );
};

export default Toggle;
