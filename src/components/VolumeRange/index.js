import React, { useEffect, useRef, useState } from 'react'

import * as S from './styles'

const VolumeRange = () => {
  const [clicked, setClicked] = useState(false)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    window.addEventListener(
      'mouseup',
      () => {
        setClicked(false)
      },
      true,
    )

    window.addEventListener(
      'mousemove',
      (event) => {
        event.preventDefault()

        if (clicked) {
          console.log(event.clientX - offset)
        }
      },
      true,
    )
  }, [])

  const handleMouseDown = (e) => {
    setClicked(true)
    setOffset(e.target.offsetLeft - e.clientX)
  }

  return (
    <div
      style={{
        background: '#282828',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <S.Wrapper>
        <S.ProgressContainer>
          <S.ProgressBar />
          <S.Dot onMouseDown={handleMouseDown} />
        </S.ProgressContainer>
      </S.Wrapper>
    </div>
  )
}

export default VolumeRange
