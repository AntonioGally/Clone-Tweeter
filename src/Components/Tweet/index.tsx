import React from 'react';
import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon,
} from './style';


const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você Retweetou
      </Retweeted>

      <Body>
        <Avatar />

        <Content>

          <Header>
            <strong>União Flasco</strong>
            <span>@uniao_flasco</span>
            <Dot/>
            <time>27 de julho</time>
          </Header>

          <Description>O melhor do shittrap</Description>
          <ImageContent />

          <Icons>
            <Status>
                <CommentIcon />
                18
              </Status>
              <Status>
                <RetweetIcon />
                18
              </Status>
              <Status>
                <LikeIcon />
                999
              </Status>
          </Icons>
        </Content>
      </Body>

    </Container>
  );
}

export default Tweet;