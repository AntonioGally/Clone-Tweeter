import React from 'react';
import ProfilePage from '../ProfilePage';

import { Container, Header, BackIcon, ProfileInfo, BottomMenu, HomeIcon, SearchIcon, BellIcon, EmailIcon } from './style';

const Main: React.FC = () => {
  return (
      <Container>
          <Header>
              <button>
                  <BackIcon/>
              </button>

              <ProfileInfo>
                  <strong>Antonio</strong>
                  <span>400 Twitts</span>
              </ProfileInfo>
          </Header>

          <ProfilePage />

          <BottomMenu>
              <HomeIcon/>
              <SearchIcon/>
              <BellIcon/>
              <EmailIcon/>
          </BottomMenu>

      </Container>
  );
}

export default Main;