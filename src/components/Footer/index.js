import React from 'react'
import { CurrentTrack } from '../CurrentTrack'
import { PlayerControls } from '../PlayerControls'
import { Volume } from '../Volume'

import * as S from './styles'

export function Footer() {
  return (
    <S.Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </S.Container>
  )
}
