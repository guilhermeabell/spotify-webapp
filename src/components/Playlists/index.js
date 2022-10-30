import React, { useEffect } from 'react'
import { useStateProvider } from '../../contexts/StateProvider'
import { reducerCases } from '../../utils/constants/index'

import * as S from './styles'
import { getAllPlaylist } from '../../services/playlist'

export default function Playlists() {
  const [{ playlists }, dispatch] = useStateProvider()

  const getPlaylistData = async () => {
    try {
      const playlists = await getAllPlaylist()
      dispatch({ type: reducerCases.SET_PLAYLISTS, playlists })
      dispatch({ type: reducerCases.SET_PLAYLISTS_ID, selectedPlaylistId: playlists[Math.floor(Math.random() * playlists.length)].id })
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    getPlaylistData()
  }, [dispatch])

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
