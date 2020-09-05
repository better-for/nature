import React, { FC, useState, Children, cloneElement } from 'react';
import { Header, OG } from 'src/components';
import { GlobalStyle, ChildrenContainer } from './style';
import { useDarkMode } from 'src/utils/useDarkMode';
import { observer } from 'mobx-react';
import { useScrollPosition, isBrowser } from 'src/utils/useScrollPosition';
import { ogHeader } from 'src/constants';

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
      <OG title={title} description={description} image={image} />
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <Header
        isDarkTheme={isDarkTheme}
        toggleTheme={toggleTheme}
        show={hideOnScroll}
      />
      <ChildrenContainer>
        {Children.map(children, child =>
          cloneElement(child as any, { isDarkTheme })
        )}
      </ChildrenContainer>
    </>
  );
});

export default Layout;
