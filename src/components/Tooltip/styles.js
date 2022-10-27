import styled, { css } from 'styled-components'

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`

export const TooltipTarget = styled.button`
  border: none;
  background: none;
  padding: 5px;
  margin: -1px;
  color: inherit;
  cursor: inherit;
  display: flex;

  ${({ showOnFocus }) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`

export const CenterContainer = styled.div`
  position: absolute;
  width: 200px;
  display: flex;
  margin-left: -100px;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  left: 50%;
  bottom: calc(100% + 5px);

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          bottom: unset;
          top: calc(1005 + 5px);
        `
      case 'left':
        return css`
          margin-left: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `
      case 'right':
        return css`
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `
      default:
        return css`
          bottom: calc(100% + 5px);
        `
    }
  }}
`

export const TooltipBox = styled.span`
  position: relative;
  background-color: #282828;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: sans-serif;
  padding: 10px 8px;
  font-size: 12px;
  border-radius: 5px;
  text-align: center;

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    border-color: #000000 transparent transparent transparent;
    left: calc(50% - 4.5px);
    top: 100%;
  }
`
