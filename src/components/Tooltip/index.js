import React, { useState, useRef } from 'react'
import * as S from './styles'
function Tooltip({ text, children, position }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const targetRef = useRef(null)

  const showTooltip = isHovered || isFocused

  const handleClick = (e) => {
    e.preventDefault()
    if (targetRef.current) {
      targetRef.current.blur()
    }
  }

  return (
    <S.TooltipWrapper>
      <S.TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onClick={handleClick}
        ref={targetRef}
        showOnFocus={isFocused}
      >
        {children}
      </S.TooltipTarget>
      {showTooltip && (
        <S.CenterContainer position={position}>
          <S.TooltipBox position={position}>{text}</S.TooltipBox>
        </S.CenterContainer>
      )}
    </S.TooltipWrapper>
  )
}

export default Tooltip
