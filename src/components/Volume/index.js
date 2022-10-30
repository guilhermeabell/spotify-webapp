import React from 'react'

import * as S from './styles'

export function Volume() {
  const setVolume = async (e) => {
    const response = await api.put(
      `https://api.spotify.com/v1/me/player/volume`,
      {},
      {
        params: {
          volume_percent: parseInt(e.target.value),
        },
      },
    )
  }
  return (
    <S.Container>
      <input type="range" min={0} max={100} onMouseUp={(e) => setVolume(e)} />
    </S.Container>
  )
}
