import React, { useEffect } from 'react'
import { useStateProvider } from '../../contexts/StateProvider'
import { currentTrack } from '../../services/currentTrack'
import { reducerCases } from '../../utils/constants/index'

import * as S from './styles'

export function CurrentTrack() {
  const [{ currentlyPlaying }, dispatch] = useStateProvider()

  useEffect(() => {
    const getCurrentTrack = async () => {
      try {
        const currentlyPlaying = await currentTrack()
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
      } catch (err) {
        console.log(err)
      }
    }

    getCurrentTrack()
  }, [dispatch])

  /*
player controls only work if user account is premium
*/

  return (
    <S.Container>
      {currentlyPlaying && (
        <div className="track">
          <div className="track_image">
            <img src={currentlyPlaying.image} alt="currentyPlaying" />
          </div>
          <div className="track__info">
            <h5>
              <div className="track_name">{currentlyPlaying.name}</div>
              <br />
              <div className="track_artist">{currentlyPlaying.artists.join(', ')}</div>
            </h5>
          </div>
        </div>
      )}
    </S.Container>
  )
}

export default CurrentTrack
