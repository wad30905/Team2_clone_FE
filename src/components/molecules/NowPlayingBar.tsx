import React, { useState } from 'react';
import styled from 'styled-components';
import { MusicProfilePropsSample } from '../../stores/SampleData';
import MusicController from './MusicController';
import MusicProfile from './MusicProfile';

const NowPlayingDiv = styled.div`
  grid-area: now-playing-bar;
  background-color: #181818;
  height: 12vh;
  display: flex;
`;

export interface Song {
  id: number;
  title: string;
  artist: string;
  url: string;
  duration: number;
}

const NowPlayingBar = () => {
  return (
    <NowPlayingDiv>
      <MusicProfile {...MusicProfilePropsSample} />
      <MusicController />
    </NowPlayingDiv>
  );
};

export default NowPlayingBar;
