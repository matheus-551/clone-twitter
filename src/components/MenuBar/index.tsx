import React from 'react';

import { 
  Container,
  Topside,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <MenuButton>
          <HomeIcon/>
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon/>
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon/>
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon/>
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton className="active">
          <ProfileIcon/>
          <span>Perfil</span>
        </MenuButton>
      </Topside>
      <Botside>
        <Avatar/>
        <ProfileData>
          <strong>Matheus Falcão</strong>
          <span>@falcaomatheus19</span>
        </ProfileData>
        <ExitIcon/>
      </Botside>
    </Container>
  );
};

export default MenuBar;