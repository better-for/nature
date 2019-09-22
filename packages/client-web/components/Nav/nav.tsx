import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const links: { href: string; label: string }[] = [
  { href: 'https://zeit.co/now', label: 'ZEIT' },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub' }
];

const Nav: FC = () => (
  <NavBar>
    <Ul>
      <Li>
        <Link href="/">
          <Anchor>Home</Anchor>
        </Link>
      </Li>
      {links.map(({ href, label }) => (
        <Li key={`nav-link-${href}-${label}`}>
          <Anchor href={href}>{label}</Anchor>
        </Li>
      ))}
    </Ul>
  </NavBar>
);

const NavBar = styled.nav`
  text-align: center;
  & > ul {
    padding: 4px 16px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Li = styled.li`
  display: flex;
  padding: 6px 8px;
`;

const Anchor = styled.a`
  color: #067df7;
  text-decoration: none;
  font-size: 13px;
`;

export default Nav;
