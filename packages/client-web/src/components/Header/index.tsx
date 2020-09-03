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
import { I18nButton, Logo, Toggle } from 'src/components';
import { Router, Link } from '../../../I18n';
import { useRouter } from 'next/router';

type Header = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  show: boolean;
};

const Header: FC<Header> = ({ isDarkTheme, toggleTheme, show }) => {
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
              <Logo />
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
};

export default Header;
