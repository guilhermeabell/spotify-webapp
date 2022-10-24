import React from 'react'
import { useStateProvider } from '../../contexts/StateProvider'
import axios from 'axios'

import * as S from './styles'

export function Volume() {
  const [{ token }] = useStateProvider()
  const setVolume = async (e) => {
    const response = await axios.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      },
    )
    console.log(response)
  }
  return (
    <S.Container>
      <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
    </S.Container>
  )
}
