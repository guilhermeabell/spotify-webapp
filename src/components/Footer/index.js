import React from 'react'
import styled from 'styled-components'
import { CurrentTrack } from '../CurrentTrack'
import { PlayerControls } from '../PlayerControls'
import { Volume } from '../Volume'

import { Container } from './styles'

export function Footer() {
  return (
    <Container>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </Container>
  )
}
