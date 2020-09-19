import React, { FC } from 'react';
import {
  FloatContainer,
  ToggleContainer,
  BackButton,
  Navbar,
  Ul,
  Li,
  Anchor,
  Optionbar
} from './style';
import { I18nChip, Logo, Toggle } from 'src/components';
import { Router, Link } from 'I18n';
import { useRouter } from 'next/router';

type Header = {
  show: boolean;
};

const Header: FC<Header> = ({ show }) => {
  const { pathname } = useRouter();
  return (
    <>
      <Navbar show={show}>
        <Ul>
          <Li>
            {pathname !== '/' ? (
              <BackButton onClick={() => Router.back()}>&larr;</BackButton>
            ) : null}
          </Li>
          <Li>
            <Link href="/">
              <Anchor>
                <Logo />
              </Anchor>
            </Link>
          </Li>
          <Li></Li>
        </Ul>
      </Navbar>
      <Optionbar show={show}>
        <FloatContainer>
          <ToggleContainer>
            <Toggle />
          </ToggleContainer>
          <I18nChip />
        </FloatContainer>
      </Optionbar>
    </>
  );
};

export default Header;
