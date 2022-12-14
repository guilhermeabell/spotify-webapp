import React from 'react'
import { BsFillPauseCircleFill, BsFillPlayCircleFill, BsShuffle } from 'react-icons/bs'
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg'
import { FiRepeat } from 'react-icons/fi'
import { useStateProvider } from '../../contexts/StateProvider'
import { reducerCases } from '../../utils/constants/index'
import Tooltip from '../Tooltip'

import * as S from './styles'
import { getCurrentlyPlaying, changePlayerState } from '../../services/player'
import { api } from '../../services/api'

export function PlayerControls() {
  const [{ playerState }, dispatch] = useStateProvider()

  const changeTrack = async (type) => {
    await api.post(`me/player/${type}`)
    try {
      const currentlyPlaying = await getCurrentlyPlaying()
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying: currentlyPlaying || null })
    } catch (err) {
      console.log(err)
    }
  }

  const changeState = async () => {
    const state = playerState ? 'pause' : 'play'

    try {
      const response = await changePlayerState(state)
      dispatch({
        type: reducerCases.SET_PLAYER_STATE,
        playerState: !playerState,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <S.Container>
      <div className="shuffle">
        <BsShuffle />
      </div>
      <div className="previous">
        <Tooltip text="Voltar" position="top">
          <CgPlayTrackPrev size={30} onClick={() => changeTrack('previous')} />
        </Tooltip>
      </div>
      <div className="state">
        {playerState ? (
          <Tooltip text="Pausar" position="top">
            <BsFillPauseCircleFill size={40} onClick={changeState} />
          </Tooltip>
        ) : (
          <Tooltip text="Play" position="top">
            <BsFillPlayCircleFill size={40} onClick={changeState} />
          </Tooltip>
        )}
      </div>
      <div className="next">
        <Tooltip text="Avançar" position="top">
          <CgPlayTrackNext size={30} onClick={() => changeTrack('next')} />
        </Tooltip>
      </div>
      <div className="repeat">
        {}
        <FiRepeat />
      </div>
    </S.Container>
  )
}
