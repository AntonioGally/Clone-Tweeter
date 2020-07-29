import React from 'react';
import Feed from '../Feed';

import { Container, Banner, Avatar, ProfileData, EditButton,LocationIcon, CakeIcon, Followage } from './style';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Antônio Gally</h1>
              <h2>@antonio_gally</h2>

              <p>
                  Lalalala isso ai flasco
              </p>

              <ul>
                  <li>
                      <LocationIcon/>
                      São Paulo, Brasil
                  </li>
                  <li>
                      <CakeIcon/>
                      Nascido em 20 de novembro 2002
                  </li>
              </ul>

              <Followage>
                  <span>
                      Seguindo <strong>90</strong>
                  </span>
                  <span>
                      <strong>455 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;