import React from 'react'

import { Container, Shadow, SpotifyLoader } from './styles'

import SpotifyLoaderImg from '../../assets/SpotifyLoader.png'

function Loader() {
  return (
    <Container>
      <SpotifyLoader src={SpotifyLoaderImg} />
      <Shadow />
    </Container>
  )
}

export default Loader
