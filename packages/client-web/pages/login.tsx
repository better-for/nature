import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { I18nPage, useTranslation } from 'I18n';
import { signIn, signOut, useSession } from 'next-auth/client';

import { MainTitle } from 'src/components';

import {
  Main,
  Row,
  SLContainer,
  Avatar,
  Email,
  SignInButton,
  SignOutButton,
  UserCard,
} from 'src/style';

declare global {
  interface Window {
    naver: any;
  }
}

const Login: I18nPage = observer(() => {
  const { t } = useTranslation();

  const [session, loading] = useSession();
  const [naverID, setNaverID] = useState<string>();

  useEffect(() => {
    const naverLogin = new window.naver.LoginWithNaverId({
      clientId: process.env.NAVER,
      callbackUrl: process.env.NAVER_CALLBACK,
      isPopup: false,
      loginButton: {
        color: 'white',
        type: 3,
        height: 40,
      },
    });
    naverLogin.init();

    window.addEventListener('load', () => {
      naverLogin.getLoginStatus((status: boolean) => {
        if (status) {
          const { name, nickname } = naverLogin.user;
          (nickname || name) && setNaverID(nickname || name);
        } else {
          console.log('callback 처리에 실패하였습니다.');
        }
      });
    });
  }, []);

  return (
    <>
      <Main>
        <MainTitle>{t('Social Login')}</MainTitle>
      </Main>
      <Row>
        <SLContainer>
          <>
            {!naverID && <div id="naverIdLogin"></div>}
            {naverID && <div>{`${naverID} 님, 반갑습니다.`}</div>}
          </>
          <p>
            {!session && (
              <SignInButton
                onClick={(e) => {
                  e.preventDefault();
                  signIn('facebook');
                }}
              >
                Facebook
              </SignInButton>
            )}
            {session && (
              <UserCard>
                <Avatar
                  style={{ backgroundImage: `url(${session.user.image})` }}
                />
                <Email>{session.user.email || session.user.name}</Email>
                <a
                  href="/api/auth/signout"
                  onClick={(e) => {
                    e.preventDefault();
                    signOut();
                  }}
                >
                  <SignOutButton>Sign out</SignOutButton>
                </a>
              </UserCard>
            )}
          </p>
        </SLContainer>
      </Row>
    </>
  );
});

export default Login;

Login.getInitialProps = async () => {
  return {
    namespacesRequired: ['common'],
  };
};
