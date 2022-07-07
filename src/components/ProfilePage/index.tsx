import React from 'react';

import Feed from '../Feed';

import { 
  Container, 
  Banner, 
  Avatar, 
  ProfileData, 
  LocationIcon, 
  CakeIcon, 
  Followage,
  EditButton 
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar perfil</EditButton>

        <h1>Matheus Falcão</h1>
        <h2>@falcaomatheus19</h2>

        <p>
          Software Developer
        </p>

        <ul>
          <li>
            <LocationIcon/>
            Recife, Brasil
          </li>
          <li>
            <CakeIcon/>
            Nascido(a) em 11 de junho de 2002
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>50</strong>
          </span>
          <span>
            <strong>127 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed/>
    </Container>
  )
}

export default ProfilePage;