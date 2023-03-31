import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

interface Data {
  imgSrc: string;
  music: string;
  artist: string;
  album: string;
  update: string;
  time: number;
  musicLink: string;
  artistLink: string;
  albumLink: string;
}

interface Props {
  data: Array<Data>;
}

const BottomDiv = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0 32px;
`;
const OutlineGrid = styled.div`
  display: grid;
  grid-template-columns:
    [index] 16px [title] 6fr [album] 4fr
    [date] 3fr [time] minmax(120px, 1fr);
  @media screen and (max-width: 970px) {
    grid-template-columns:
      [index] 16px [title] 6fr [album] 4fr
      [time] minmax(120px, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns:
      [index] 16px [title] 6fr
      [time] minmax(120px, 1fr);
  }
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.1);
  grid-gap: 16px;
  color: #b3b3b3;
  height: 36px;
  align-items: center;
  padding: 0 16px;
`;
const OutlineSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const FlexDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;
const ItemDiv = styled.div.attrs({ tabIndex: -1 })`
  display: grid;
  grid-template-columns:
    [index] 16px [title] 6fr [album] 4fr
    [date] 3fr [time] minmax(120px, 1fr);
  @media screen and (max-width: 970px) {
    grid-template-columns:
      [index] 16px [title] 6fr [album] 4fr
      [time] minmax(120px, 1fr);
  }
  @media screen and (max-width: 770px) {
    grid-template-columns:
      [index] 16px [title] 6fr
      [time] minmax(120px, 1fr);
  }
  border: 1px solid transparent;
  border-radius: 4px;
  height: 56px;
  grid-gap: 16px;
  padding: 0 16px;
  align-items: center;
  color: #b3b3b3;
  :hover {
    background-color: hsla(0, 0%, 100%, 0.1);
    .hover {
      color: white;
    }
    .play {
      opacity: 1;
    }
    .index {
      opacity: 0;
    }
  }
  :focus {
    background-color: hsla(0, 0%, 100%, 0.3);
    .hover {
      color: white;
    }
    .play {
      opacity: 1;
    }
    .index {
      opacity: 0;
    }
  }
`;
const ItemSpan = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
const TitleDiv = styled.div`
  display: flex;
  gap: 16px;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BottomLink = styled(Link)<{ color?: string; fw?: string; fs?: string }>`
  color: ${(props) => props.color || '#b3b3b3'};
  font-weight: ${(props) => props.fw || '400'};
  font-size: ${(props) => props.fs || '16px'};
  :hover {
    text-decoration: underline;
  }
`;
const LikeDiv = styled.div`
  display: flex;
  gap: 30px;
`;
const IndexDiv = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
`;
const Index = styled.span`
  font-size: 16px;
  position: absolute;
  opacity: 1;
`;
const PlayButton = styled.button`
  position: absolute;
  right: 4px;
  opacity: 0;
  border: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  color: white;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    opacity: 1;
  }
`;

const PlaylistBottomDiv = ({ data }: Props) => {
  return (
    <BottomDiv>
      <OutlineGrid>
        <OutlineSpan>#</OutlineSpan>
        <OutlineSpan>제목</OutlineSpan>
        <OutlineSpan>앨범</OutlineSpan>
        <OutlineSpan>추가한 날짜</OutlineSpan>
        <OutlineSpan style={{ justifySelf: 'end' }}>
          <AccessTimeIcon />
        </OutlineSpan>
      </OutlineGrid>
      <FlexDiv>
        {data.map((value, index) => (
          <ItemDiv key={index}>
            <IndexDiv>
              <Index className="index">{index + 1}</Index>
              <PlayButton className="play">
                <PlayArrowIcon
                  sx={{
                    fontSize: '20px',
                  }}
                />
              </PlayButton>
            </IndexDiv>
            <TitleDiv>
              <Img src={value.imgSrc} />
              <TextDiv>
                <BottomLink color="white" to={value.musicLink}>
                  {value.music}
                </BottomLink>
                <BottomLink className="hover" fs="14px" to={value.artistLink}>
                  {value.artist}
                </BottomLink>
              </TextDiv>
            </TitleDiv>
            <BottomLink className="hover" to={value.albumLink}>
              {value.album}
            </BottomLink>
            <ItemSpan>{value.update}</ItemSpan>
            <LikeDiv style={{ justifySelf: 'end' }}>
              <FavoriteIcon
                sx={{
                  color: '#1ed760',
                  fontSize: '20px',
                }}
              />
              <ItemSpan>
                {value.time % 60 >= 10
                  ? Math.floor(value.time / 60) + ':' + (value.time % 60)
                  : Math.floor(value.time / 60) + ':0' + (value.time % 60)}
              </ItemSpan>
            </LikeDiv>
          </ItemDiv>
        ))}
      </FlexDiv>
    </BottomDiv>
  );
};

export default PlaylistBottomDiv;
