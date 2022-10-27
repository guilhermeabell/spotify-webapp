import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 95px;
`

export const ProgressBar = styled.div`
  width: 50%;
  height: 100%;
  border-radius: inherit;
  background: #fff;
  transition: background 0.2s ease;
`

export const ProgressContainer = styled.div`
  height: 4px;
  border-radius: 8px;
  width: 100%;
  background: rgba(255, 255, 255, 0.3);
  position: relative;

  &:hover ${ProgressBar} {
    background: #1db954;
  }
`

export const Dot = styled.div`
  display: block;
  background-color: #fff;
  border: 0;
  border-radius: 50%;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 50%);
  height: 12px;
  left: 50%;
  margin-left: -6px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  z-index: 100;
`
