import React from 'react'

import * as S from './styles'

import SpotifyLoaderImg from '../../assets/SpotifyLoader.png'

function Loader() {
  return (
    <S.Container>
      <S.SpotifyLoader src={SpotifyLoaderImg} />
      <S.Shadow />
    </S.Container>
  )
}

export default Loader
