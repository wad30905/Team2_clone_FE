import React from 'react';
import PlaylistBottomDiv from '../components/molecules/PlaylistBottomDiv';
import PlaylistMidDiv from '../components/molecules/PlaylistMidDiv';
import PlaylistTopDiv from '../components/molecules/PlaylistTopDiv';
import { TopDivData, AlbumTrack } from '../stores/SampleData';
import { Tracks } from '../stores/SampleData';
import { Section } from './WebPlayerTracks';
const PlaylistData = [
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02112b210accd05345a17a46f0',
    music: 'DREAM',
    artist: '수지',
    album: 'Dream',
    update: '4주 전',
    time: 222,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e029d28fd01859073a3ae6ea209',
    music: 'Attention',
    artist: 'NewJeans',
    album: "NewJeans 1st EP 'New Jeans'",
    update: '4주 전',
    time: 180,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02a991995542d50a691b9ae5be',
    music: 'ANTIFRAGILE',
    artist: 'LE SSERAFIM',
    album: 'ANTIFRAGILE',
    update: '4주 전',
    time: 184,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e028c7e7f435fdcc70772c5555e',
    music: 'Fine',
    artist: '태연',
    album: 'My Voice - The 1st Album',
    update: '4주 전',
    time: 209,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
  {
    imgSrc: 'https://i.scdn.co/image/ab67616d00001e02d70036292d54f29e8b68ec01',
    music: 'OMG',
    artist: 'NewJeans',
    album: "NewJeans 'OMG'",
    update: '4주 전',
    time: 212,
    musicLink: '',
    artistLink: '',
    albumLink: '',
  },
];

function WebPlayerAlbumPlayList() {
  return (
    <Section>
      <PlaylistTopDiv data={TopDivData} playlistData={AlbumTrack} />
      <PlaylistMidDiv data={AlbumTrack} type={'album'} />
      <PlaylistBottomDiv data={AlbumTrack} />
    </Section>
  );
}

export default WebPlayerAlbumPlayList;
