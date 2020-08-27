import React, { FC, useState } from 'react';
import Header from '../Header';
import { GlobalStyle, ChildrenContainer } from './style';
import { useDarkMode } from '../../utils/useDarkMode';
import OGHeader from '../OG';
import { ogHeader } from '../../../dataContent';
import { observer } from 'mobx-react';
import { useScrollPosition, isBrowser } from '../../utils/useScrollPosition';

const Layout: FC = observer(({ children }) => {
  const { title, description, image } = ogHeader;
  const [isDarkTheme, toggleTheme] = useDarkMode();
  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y < prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    isBrowser,
    300
  );

  return (
    <>
      <OGHeader title={title} description={description} image={image} />
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <Header
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        show={hideOnScroll}
      />
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
});

export default Layout;