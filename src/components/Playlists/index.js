import React from 'react'
import { useEffect } from 'react'
import { useStateProvider } from '../../contexts/StateProvider'
import axios from 'axios'
import { reducerCases } from '../../utils/constants/index'

import * as S from './styles'

export default function Playlists() {
  const [{ token, playlists }, dispatch] = useStateProvider()
  useEffect(() => {
    const getPlaylistData = async () => {
      const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json',
        },
      })

      const { items } = response.data
      const playlists = items.map(({ name, id }) => {
        return { name, id }
      })
      // console.log(playlists);
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists })
    }

    getPlaylistData()
  }, [token, dispatch])

  const changeCurrentPlaylist = (selectedPlaylistId) => {
    dispatch({ type: reducerCases.SET_PLAYLISTS_ID, selectedPlaylistId })
  }

  return (
    <S.Container>
      <div>
        <ul>
          {playlists.map(({ name, id }) => {
            return (
              <li key={id} onClick={() => changeCurrentPlaylist(id)}>
                {name}{' '}
              </li>
            )
          })}
        </ul>
      </div>
    </S.Container>
  )
}
