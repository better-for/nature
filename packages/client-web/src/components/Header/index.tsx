import React, { FC } from 'react';
import {
  FloatContainer,
  ToggleContainer,
  BackButton,
  Navbar,
  Ul,
  Li,
  Anchor
} from './style';
import I18nButton from 'src/components/I18nButton';
import Logo from 'src/components/Logo';
import Toggle from '../Toggle';
import { Router, Link } from '../../../I18n';
import { observer } from 'mobx-react';
import { useRouter } from 'next/router';

type Header = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  show: boolean;
};

const Header: FC<Header> = observer(({ isDarkTheme, toggleTheme, show }) => {
  const { pathname } = useRouter();
  return (
    <Navbar isDarkTheme={isDarkTheme} show={show}>
      <Ul>
        <Li>
          {pathname !== '/' ? (
            <BackButton onClick={() => Router.back()}>&larr; Back</BackButton>
          ) : null}
        </Li>
        <Li>
          <Link href="/">
            <Anchor>
              <Logo isDarkTheme={isDarkTheme} />
            </Anchor>
          </Link>
        </Li>
        <Li>
          <FloatContainer>
            <ToggleContainer>
              <Toggle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
            </ToggleContainer>
            <I18nButton isDarkTheme={isDarkTheme} />
          </FloatContainer>
        </Li>
      </Ul>
    </Navbar>
  );
});

export default Header;
