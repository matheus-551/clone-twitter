import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import { 
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body, 
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter"/>
        <SearchIcon/>
      </SearchWrapper>

      <StickyBox>
      <Body>
       <List
        title='Talvez você curta'
        elements={[
          <FollowSuggestion name="Fernanda Falcão" nickname="@nandaFalcao"/>,
          <FollowSuggestion name="Otavio Augusto" nickname="@otavioAugusto24"/>,
          <FollowSuggestion name="Thaisa medeiros" nickname="@medeirosThaisa"/>
        ]}
       />
  
       <List
        title='Talvez você curta'
        elements={[
          <News/>,
          <News/>,
          <News/>
        ]}
       />
      </Body>
      </StickyBox>
    </Container>
  )
}

export default SideBar;