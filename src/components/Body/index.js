import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { AiFillClockCircle } from 'react-icons/ai'
import { useStateProvider } from '../../contexts/StateProvider'
import { reducerCases } from '../../utils/constants/index'

import * as S from './styles'

import { getSelectedPlaylist } from '../../services/selectedPlaylist'
import { api } from '../../services/api'

export function Body({ headerBackground }) {
  const [{ selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider()

  useEffect(() => {
    const getInitialPlaylist = async () => {
      try {
        const selectedPlaylist = await getSelectedPlaylist(selectedPlaylistId)
        dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist })
      } catch (err) {
        console.log(err)
      }
    }
    if (selectedPlaylistId) {
      getInitialPlaylist()
    }
  }, [dispatch, selectedPlaylistId])

  const msToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  const playTrack = async (id, name, artists, image, context_uri, track_number) => {
    const response = await api.put(`https://api.spotify.com/v1/me/player/play`, {
      context_uri,
      offset: {
        position: track_number - 1,
      },
      position_ms: 0,
    })
    if (response.status === 204) {
      const currentlyPlaying = {
        id,
        name,
        artists,
        image,
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying })
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
    } else {
      dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: true })
    }
  }

  return (
    <S.Container headerBackground={headerBackground}>
      {selectedPlaylist && (
        <>
          <S.Playlist>
            <S.Image className="image">
              <img src={selectedPlaylist.image} alt="selectedPlaylist" />
            </S.Image>
            <S.Details>
              <span className="type">{selectedPlaylist.name}</span>
              <S.Title>{selectedPlaylistId.name}</S.Title>
              <p className="description">{selectedPlaylist.description}</p>
            </S.Details>
          </S.Playlist>
          <S.List>
            <S.HeaderRow>
              <div className="col">
                <span>#</span>
              </div>
              <div className="col">
                <span>TITLE</span>
              </div>
              <div className="col">
                <span>ALBUM</span>
              </div>
              <div className="col">
                <span>
                  <AiFillClockCircle />
                </span>
              </div>
            </S.HeaderRow>
            <S.Tracks>
              {selectedPlaylist.tracks.map(({ id, name, artists, image, duration, album, context_uri, track_number }, index) => {
                return (
                  <S.Row key={id} onClick={() => playTrack(id, name, artists, image, context_uri, track_number)}>
                    <S.Col>
                      <span>{index + 1}</span>
                    </S.Col>
                    <S.Detail>
                      <imvv fgrgfrvtvtcg>
                        <img src={image} alt="track" />
                      </imvv>
                      <S.Info>
                        <span className="name">{name}</span>
                        <span>{artists}</span>
                      </S.Info>
                    </S.Detail>
                    <S.Col>
                      <span>{album}</span>
                    </S.Col>
                    <S.Col>
                      <span>{msToMinutesAndSeconds(duration)}</span>
                    </S.Col>
                  </S.Row>
                )
              })}
            </S.Tracks>
          </S.List>
        </>
      )}
    </S.Container>
  )
}

Body.propTypes = {
  headerBackground: PropTypes.bool.isRequired,
}
