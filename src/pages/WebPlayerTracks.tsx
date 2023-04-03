import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import { TopDivData, Tracks } from '../stores/SampleData';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  color: white;
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
`;

const WebPlayerTracks = () => {
  return (
    <Section>
      <PlaylistTopDiv data={TopDivData} num={Tracks.length} />
      <PlaylistMidDiv />
      <PlaylistBottomDiv data={Tracks} />
    </Section>
  );
};

export default WebPlayerTracks;
