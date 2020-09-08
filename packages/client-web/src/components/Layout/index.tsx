import React, { FC, useState } from 'react';
import { Header, OG } from 'src/components';
import { GlobalStyle, ChildrenContainer } from './style';
import { observer } from 'mobx-react';
import { useScrollPosition, isBrowser } from 'src/utils/useScrollPosition';
import { ogHeader } from 'src/constants';
import { useDarkModeTheme } from 'src/utils/storeUtils';

const Layout: FC = observer(({ children }) => {
  const { title, description, image } = ogHeader;
  const { isDarkTheme } = useDarkModeTheme();
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
      <Header show={hideOnScroll} />
      <ChildrenContainer>{children}</ChildrenContainer>
    </>
  );
});

export default Layout;
