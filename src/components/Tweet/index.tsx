import React from 'react';

import {
  Container,
  Retweeted,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar/>

        <Content>
          <Header>
            <strong>Rocketseat</strong>
            <span>@rocketseat</span>
            <Dot/>
            <time>27 de jun</time>
          </Header>

          <Description>
            Foguete não tem ré
          </Description>

          <ImageContent/>

          <Icons>
            <Status>
              <ComentIcon/>
              18
            </Status>
  
            <Status>
              <LikeIcon/>
              999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet;