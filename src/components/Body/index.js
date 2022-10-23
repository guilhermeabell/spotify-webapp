import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { AiFillClockCircle } from 'react-icons/ai'
import { useStateProvider } from '../../contexts/StateProvider'
import axios from 'axios'
import { reducerCases } from '../../utils/constants/index'

import { Container } from './styles'

export function Body({ headerBackground }) {
  const [{ token, selectedPlaylistId, selectedPlaylist }, dispatch] = useStateProvider()
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      })
      const selectedPlaylist = {
        id: response.data.id,
        name: response.data.name,
        description: response.data.description.startsWith('<a') ? ' ' : response.data.description,
        image: response.data.images[0].url,
        tracks: response.data.tracks.items.map(({ track }) => ({
          id: track.id,
          name: track.name,
          artists: track.artists.map((artist) => artist.name),
          image: track.album.images[2].url,
          duration: track.duration_ms,
          album: track.album.name,
          context_uri: track.album.uri,
          track_number: track.track_number,
        })),
      }
      // console.log(selectedPlaylist);
      // console.log(response.data);
      dispatch({ type: reducerCases.SET_PLAYLIST, selectedPlaylist })
    }
    getInitialPlaylist()
  }, [token, dispatch, selectedPlaylistId])

  const msToMinutesAndSeconds = (ms) => {
    const minutes = Math.floor(ms / 60000)
    const seconds = ((ms % 60000) / 1000).toFixed(0)
    return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
  }

  return (
    <Container headerBackground={headerBackground}>
      {selectedPlaylist && (
        <>
          <div className="playlist">
            <div className="image">
              <img src={selectedPlaylist.image} alt="selectedPlaylist" />
            </div>
            <div className="details">
              <span className="type">PLAYLIST</span>
              <h1 className="title">{selectedPlaylistId.name}</h1>
              <p className="description">{selectedPlaylist.description}</p>
            </div>
          </div>
          <div className="list">
            <div className="header_row">
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
            </div>
            <div className="tracks">
              {selectedPlaylist.tracks.map(({ id, name, artists, image, duration, album, context_uri, track_number }, index) => {
                return (
                  <div className="row" key={id}>
                    <div className="col">
                      <span>{index + 1}</span>
                    </div>
                    <div className="col detail">
                      <div className="img">
                        <img src={image} alt="track" />
                      </div>
                      <div className="info">
                        <span className="name">{name}</span>
                        <span>{artists}</span>
                      </div>
                    </div>
                    <div className="col">
                      <span>{album}</span>
                    </div>
                    <div className="col">
                      <span>{msToMinutesAndSeconds(duration)}</span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </>
      )}
    </Container>
  )
}

Body.propTypes = {
  headerBackground: PropTypes.bool.isRequired,
}
