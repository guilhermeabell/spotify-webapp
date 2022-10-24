import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { reducerCases } from '../../utils/constants/index'
import { useStateProvider } from '../../contexts/StateProvider'

import * as S from './styles'

export function CurrentTrack() {
  const [{ token, currentlyPlaying }, dispatch] = useStateProvider()
  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      })
      // console.log(response)
      if (response.data !== '') {
        const { item } = response.data
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,
        }
        dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
      }
    }

    getCurrentTrack()
  }, [token, dispatch])

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
