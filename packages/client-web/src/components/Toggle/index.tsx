import React, { FC } from 'react';
import { Container, Track, Checked, Thumb, ToggleImg } from './style';

type Toggle = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};
const moon =
  'https://user-images.githubusercontent.com/29101760/90979579-ee0b7100-e590-11ea-8135-bc65e53c1daa.png';
const sun =
  'https://user-images.githubusercontent.com/29101760/90979581-ef3c9e00-e590-11ea-90e1-4b52f6b7ab61.png';

const Toggle: FC<Toggle> = ({ isDarkTheme, toggleTheme }) => (
  <Container onClick={toggleTheme} isDarkTheme={isDarkTheme}>
    <Track>
      <Checked>
        <ToggleImg
          src={isDarkTheme ? moon : sun}
          alt={isDarkTheme ? 'moon' : 'sun'}
          role="presentation"
        />
      </Checked>
    </Track>
    <Thumb />
  </Container>
);

export default Toggle;
